#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <math.h>
#include <string.h>
#include <unistd.h>
#include <termios.h>
#include <sys/select.h>

#define WIDTH 80
#define HEIGHT 40
#define FOV 60.0

typedef struct { float x, y, z; } Vec3;
typedef struct { int x, y; } Point2D;
typedef struct { Vec3 v1, v2, v3; } Triangle;

typedef struct {
    Triangle *triangles;
    uint32_t count;
    Vec3 min, max;
} Mesh;

static char frame_buffer[HEIGHT][WIDTH];
static struct termios orig_termios;

void reset_terminal(void) {
    tcsetattr(STDIN_FILENO, TCSANOW, &orig_termios);
    printf("\033[?25h\033[0m\n"); // restore cursor
}

void setup_terminal(void) {
    tcgetattr(STDIN_FILENO, &orig_termios);
    atexit(reset_terminal);
    struct termios raw = orig_termios;
    raw.c_lflag &= ~(ECHO | ICANON); // disable echo & canonical mode
    tcsetattr(STDIN_FILENO, TCSANOW, &raw);
    printf("\033[?25l\033[2J");      // hide cursor, clear screen
}

int read_key(void) {
    struct timeval tv = {0, 0};
    fd_set fds;
    FD_ZERO(&fds);
    FD_SET(STDIN_FILENO, &fds);
    if (select(STDIN_FILENO + 1, &fds, NULL, NULL, &tv) > 0) {
        char c;
        if (read(STDIN_FILENO, &c, 1) == 1) return c;
    }
    return 0;
}

int load_binary_stl(const char *filename, Mesh *mesh) {
    FILE *f = fopen(filename, "rb");
    if (!f) return 0;

    fseek(f, 80, SEEK_SET); // skip 80-byte header
    if (fread(&mesh->count, sizeof(uint32_t), 1, f) != 1) {
        fclose(f);
        return 0;
    }

    mesh->triangles = malloc(mesh->count * sizeof(Triangle));
    if (!mesh->triangles) { fclose(f); return 0; }

    mesh->min = (Vec3){1e9, 1e9, 1e9};
    mesh->max = (Vec3){-1e9, -1e9, -1e9};

    #pragma pack(push, 1)
    struct StlFacet {
        float normal[3];
        float v1[3], v2[3], v3[3];
        uint16_t attr;
    } facet;
    #pragma pack(pop)

    for (uint32_t i = 0; i < mesh->count; i++) {
        if (fread(&facet, 50, 1, f) != 1) break;
        Triangle *t = &mesh->triangles[i];
        t->v1 = (Vec3){facet.v1[0], facet.v1[1], facet.v1[2]};
        t->v2 = (Vec3){facet.v2[0], facet.v2[1], facet.v2[2]};
        t->v3 = (Vec3){facet.v3[0], facet.v3[1], facet.v3[2]};

        Vec3 pts[3] = {t->v1, t->v2, t->v3};
        for (int p = 0; p < 3; p++) {
            if (pts[p].x < mesh->min.x) mesh->min.x = pts[p].x;
            if (pts[p].y < mesh->min.y) mesh->min.y = pts[p].y;
            if (pts[p].z < mesh->min.z) mesh->min.z = pts[p].z;
            if (pts[p].x > mesh->max.x) mesh->max.x = pts[p].x;
            if (pts[p].y > mesh->max.y) mesh->max.y = pts[p].y;
            if (pts[p].z > mesh->max.z) mesh->max.z = pts[p].z;
        }
    }
    fclose(f);

    // Auto-center and normalize scale to [-1.0, 1.0]
    Vec3 center = {
        (mesh->min.x + mesh->max.x) * 0.5f,
        (mesh->min.y + mesh->max.y) * 0.5f,
        (mesh->min.z + mesh->max.z) * 0.5f
    };
    float max_dim = mesh->max.x - mesh->min.x;
    if (mesh->max.y - mesh->min.y > max_dim) max_dim = mesh->max.y - mesh->min.y;
    if (mesh->max.z - mesh->min.z > max_dim) max_dim = mesh->max.z - mesh->min.z;
    float scale = (max_dim > 0.0f) ? (2.0f / max_dim) : 1.0f;

    for (uint32_t i = 0; i < mesh->count; i++) {
        Triangle *t = &mesh->triangles[i];
        t->v1 = (Vec3){(t->v1.x - center.x) * scale, (t->v1.y - center.y) * scale, (t->v1.z - center.z) * scale};
        t->v2 = (Vec3){(t->v2.x - center.x) * scale, (t->v2.y - center.y) * scale, (t->v2.z - center.z) * scale};
        t->v3 = (Vec3){(t->v3.x - center.x) * scale, (t->v3.y - center.y) * scale, (t->v3.z - center.z) * scale};
    }
    return 1;
}

void draw_line(int x0, int y0, int x1, int y1, char ch) {
    int dx = abs(x1 - x0), dy = -abs(y1 - y0);
    int sx = (x0 < x1) ? 1 : -1, sy = (y0 < y1) ? 1 : -1;
    int err = dx + dy;
    while (1) {
        if (x0 >= 0 && x0 < WIDTH && y0 >= 0 && y0 < HEIGHT) frame_buffer[y0][x0] = ch;
        if (x0 == x1 && y0 == y1) break;
        int e2 = 2 * err;
        if (e2 >= dy) { err += dy; x0 += sx; }
        if (e2 <= dx) { err += dx; y0 += sy; }
    }
}

Vec3 rotate(Vec3 v, float ax, float ay) {
    // Pitch (around X)
    float y1 = v.y * cosf(ax) - v.z * sinf(ax);
    float z1 = v.y * sinf(ax) + v.z * cosf(ax);
    // Yaw (around Y)
    Vec3 r;
    r.x = v.x * cosf(ay) + z1 * sinf(ay);
    r.y = y1;
    r.z = -v.x * sinf(ay) + z1 * cosf(ay);
    return r;
}

Point2D project(Vec3 v, float dist) {
    float z = v.z + dist;
    if (z <= 0.1f) z = 0.1f;
    float scale = (WIDTH / 2.0f) * (FOV / 100.0f);
    return (Point2D){
        .x = (int)((v.x / z) * scale * 2.0f) + (WIDTH / 2),
        .y = (int)((-v.y / z) * scale) + (HEIGHT / 2)
    };
}

int main(int argc, char **argv) {
    if (argc < 2) {
        fprintf(stderr, "Usage: %s <binary_stl_file>\n", argv[0]);
        return 1;
    }

    Mesh mesh;
    if (!load_binary_stl(argv[1], &mesh)) {
        fprintf(stderr, "Failed to load binary STL file: %s\n", argv[1]);
        return 1;
    }

    setup_terminal();

    float ax = 0.3f, ay = 0.5f, dist = 3.2f;
    char out_buf[(WIDTH + 1) * HEIGHT + 128];

    while (1) {
        int key = read_key();
        if (key == 'q' || key == 27) break; // Q or ESC to quit
        if (key == 'w') ax -= 0.1f;
        if (key == 's') ax += 0.1f;
        if (key == 'a') ay -= 0.1f;
        if (key == 'd') ay += 0.1f;
        if (key == '+' || key == '=') dist = (dist > 1.2f) ? dist - 0.2f : dist;
        if (key == '-' || key == '_') dist += 0.2f;

        memset(frame_buffer, ' ', sizeof(frame_buffer));

        for (uint32_t i = 0; i < mesh.count; i++) {
            Triangle t = mesh.triangles[i];
            Point2D p1 = project(rotate(t.v1, ax, ay), dist);
            Point2D p2 = project(rotate(t.v2, ax, ay), dist);
            Point2D p3 = project(rotate(t.v3, ax, ay), dist);

            draw_line(p1.x, p1.y, p2.x, p2.y, '#');
            draw_line(p2.x, p2.y, p3.x, p3.y, '#');
            draw_line(p3.x, p3.y, p1.x, p1.y, '#');
        }

        // Single-pass write to terminal
        int idx = 0;
        idx += sprintf(&out_buf[idx], "\033[H\033[36mTriangles: %u | Controls: WASD to rotate, +/- to zoom, Q to quit\033[0m\n", mesh.count);
        for (int y = 0; y < HEIGHT; y++) {
            for (int x = 0; x < WIDTH; x++) out_buf[idx++] = frame_buffer[y][x];
            out_buf[idx++] = '\n';
        }
        out_buf[idx] = '\0';
        fputs(out_buf, stdout);
        fflush(stdout);

        usleep(16000); // ~60 FPS
    }

    free(mesh.triangles);
    return 0;
}

