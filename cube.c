#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include <unistd.h>

#define WIDTH 80
#define HEIGHT 40
#define FOV 60.0
#define DISTANCE 3.5

typedef struct {
    float x, y, z;
} Vec3;

typedef struct {
    int x, y;
} Point2D;

typedef struct {
    int v1, v2;
} Edge;

// 8 vertices of a unit cube centered at origin
static const Vec3 cube_vertices[8] = {
    {-1.0f, -1.0f, -1.0f},
    { 1.0f, -1.0f, -1.0f},
    { 1.0f,  1.0f, -1.0f},
    {-1.0f,  1.0f, -1.0f},
    {-1.0f, -1.0f,  1.0f},
    { 1.0f, -1.0f,  1.0f},
    { 1.0f,  1.0f,  1.0f},
    {-1.0f,  1.0f,  1.0f}
};

// 12 edges connecting vertices
static const Edge cube_edges[12] = {
    {0, 1}, {1, 2}, {2, 3}, {3, 0}, // back face
    {4, 5}, {5, 6}, {6, 7}, {7, 4}, // front face
    {0, 4}, {1, 5}, {2, 6}, {3, 7}  // connecting edges
};

static char frame_buffer[HEIGHT][WIDTH];

void clear_buffer(void) {
    memset(frame_buffer, ' ', sizeof(frame_buffer));
}

void put_pixel(int x, int y, char ch) {
    if (x >= 0 && x < WIDTH && y >= 0 && y < HEIGHT) {
        frame_buffer[y][x] = ch;
    }
}

// Bresenham's line rasterization algorithm
void draw_line(int x0, int y0, int x1, int y1, char ch) {
    int dx = abs(x1 - x0);
    int dy = -abs(y1 - y0);
    int sx = (x0 < x1) ? 1 : -1;
    int sy = (y0 < y1) ? 1 : -1;
    int err = dx + dy;

    while (1) {
        put_pixel(x0, y0, ch);
        if (x0 == x1 && y0 == y1) break;
        int e2 = 2 * err;
        if (e2 >= dy) {
            err += dy;
            x0 += sx;
        }
        if (e2 <= dx) {
            err += dx;
            y0 += sy;
        }
    }
}

// Rotate vector in 3D space around X, Y, and Z axes
Vec3 rotate(Vec3 v, float ax, float ay, float az) {
    Vec3 r;

    // Rotate around X
    float y1 = v.y * cosf(ax) - v.z * sinf(ax);
    float z1 = v.y * sinf(ax) + v.z * cosf(ax);
    float x1 = v.x;

    // Rotate around Y
    float x2 = x1 * cosf(ay) + z1 * sinf(ay);
    float z2 = -x1 * sinf(ay) + z1 * cosf(ay);
    float y2 = y1;

    // Rotate around Z
    r.x = x2 * cosf(az) - y2 * sinf(az);
    r.y = x2 * sinf(az) + y2 * cosf(az);
    r.z = z2;

    return r;
}

// Project 3D vector to 2D terminal coordinates
Point2D project(Vec3 v) {
    // Offset along Z so object sits in front of the camera
    float z = v.z + DISTANCE;
    
    // Perspective division: x' = x / z, y' = y / z
    // Terminal characters are ~2x taller than wide, so stretch X to correct aspect ratio
    float aspect_ratio_correction = 2.0f;
    float scale = (WIDTH / 2.0f) * (FOV / 100.0f);

    Point2D p;
    p.x = (int)((v.x / z) * scale * aspect_ratio_correction) + (WIDTH / 2);
    p.y = (int)((-v.y / z) * scale) + (HEIGHT / 2); // Invert Y because terminal Y grows down

    return p;
}

void render_frame(void) {
    // Move cursor to top-left (avoid full terminal clear to prevent flicker)
    printf("\033[H");
    
    char out_buf[(WIDTH + 1) * HEIGHT + 1];
    int idx = 0;

    for (int y = 0; y < HEIGHT; y++) {
        for (int x = 0; x < WIDTH; x++) {
            out_buf[idx++] = frame_buffer[y][x];
        }
        out_buf[idx++] = '\n';
    }
    out_buf[idx] = '\0';
    fputs(out_buf, stdout);
    fflush(stdout);
}

int main(void) {
    float angle_x = 0.0f;
    float angle_y = 0.0f;
    float angle_z = 0.0f;

    // Clear terminal screen and hide cursor
    printf("\033[2J\033[?25l");

    while (1) {
        clear_buffer();

        Point2D projected[8];
        for (int i = 0; i < 8; i++) {
            Vec3 rot = rotate(cube_vertices[i], angle_x, angle_y, angle_z);
            projected[i] = project(rot);
        }

        // Draw all 12 wireframe edges
        for (int i = 0; i < 12; i++) {
            Point2D p1 = projected[cube_edges[i].v1];
            Point2D p2 = projected[cube_edges[i].v2];
            draw_line(p1.x, p1.y, p2.x, p2.y, '#');
        }

        render_frame();

        // Increment rotation angles
        angle_x += 0.04f;
        angle_y += 0.06f;
        angle_z += 0.02f;

        // ~33ms delay = ~30 FPS
        usleep(33000);
    }

    // Restore cursor (if loop exits)
    printf("\033[?25h");
    return 0;
}

