#include <stdio.h>
#include <stdint.h>

#pragma pack(push, 1)
typedef struct {
    float normal[3];
    float v1[3], v2[3], v3[3];
    uint16_t attr;
} StlFacet;
#pragma pack(pop)

int main(void) {
    FILE *f = fopen("test_cube.stl", "wb");
    if (!f) return 1;

    // 1. 80-byte header
    uint8_t header[80] = "Procedural Binary STL Test Cube";
    fwrite(header, 1, 80, f);

    // 2. Number of triangles (12 triangles for a 6-sided cube)
    uint32_t num_triangles = 12;
    fwrite(&num_triangles, sizeof(uint32_t), 1, f);

    // 3. 12 Facets (2 triangles per face)
    StlFacet facets[12] = {
        // Front face (+Z)
        {{0,0,1}, {-1,-1, 1}, { 1,-1, 1}, { 1, 1, 1}, 0},
        {{0,0,1}, {-1,-1, 1}, { 1, 1, 1}, {-1, 1, 1}, 0},
        // Back face (-Z)
        {{0,0,-1}, {-1,-1,-1}, {-1, 1,-1}, { 1, 1,-1}, 0},
        {{0,0,-1}, {-1,-1,-1}, { 1, 1,-1}, { 1,-1,-1}, 0},
        // Top face (+Y)
        {{0,1,0}, {-1, 1,-1}, {-1, 1, 1}, { 1, 1, 1}, 0},
        {{0,1,0}, {-1, 1,-1}, { 1, 1, 1}, { 1, 1,-1}, 0},
        // Bottom face (-Y)
        {{0,-1,0}, {-1,-1,-1}, { 1,-1,-1}, { 1,-1, 1}, 0},
        {{0,-1,0}, {-1,-1,-1}, { 1,-1, 1}, {-1,-1, 1}, 0},
        // Right face (+X)
        {{1,0,0}, { 1,-1,-1}, { 1, 1,-1}, { 1, 1, 1}, 0},
        {{1,0,0}, { 1,-1,-1}, { 1, 1, 1}, { 1,-1, 1}, 0},
        // Left face (-X)
        {{-1,0,0}, {-1,-1,-1}, {-1,-1, 1}, {-1, 1, 1}, 0},
        {{-1,0,0}, {-1,-1,-1}, {-1, 1, 1}, {-1, 1,-1}, 0}
    };

    fwrite(facets, sizeof(StlFacet), 12, f);
    fclose(f);

    printf("Generated test_cube.stl (684 bytes)\n");
    return 0;
}

