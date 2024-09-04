const VISITED_LAND = '-1';

function numIslands(grid: string[][]): number {
    let counter = 0;
    const rows = grid.length;
    const cols = grid[0].length
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const val = grid[row][col];
            if (val === '1') {
                grid[row][col] = VISITED_LAND;
                counter++;
                // BFS
                const queue = new Array<[number, number]>([row, col]);
                while (queue.length) {
                    const [r, c] = queue.shift();
                    if (r > 0) {
                        if (grid[r - 1][c] === '1') {
                            grid[r - 1][c] = VISITED_LAND;
                            queue.push([r - 1, c])
                        }
                    }

                    if (r < rows - 1) {
                        if (grid[r + 1][c] === '1') {
                            grid[r + 1][c] = VISITED_LAND;
                            queue.push([r + 1, c])
                        }
                    }

                    if (c > 0) {
                        if (grid[r][c - 1] === '1') {
                            grid[r][c - 1] = VISITED_LAND;
                            queue.push([r, c - 1])
                        }
                    }

                    if (c < cols - 1) {
                        if (grid[r][c + 1] === '1') {
                            grid[r][c + 1] = VISITED_LAND;
                            queue.push([r, c + 1])
                        }
                    }
                }
            }
        }
    }

    return counter

};

/*
counter = 발견된 섬의 개수
rows와 cols = 그리드의 행과 열

1. 이중 for
- gird의 모든 셀을 순차적으로 검사
- 셀이 1(땅)인 경우, 섬을 발견한 것으로 간주

2. BFS를 사용하여 탐색
- 현재 셀의 값을 VISITED_LAND('-1')로 변경하여 탐색한 한 것으로 표시
- BFS를 수해앟여 상하좌우 연결된 모든 땅을 탐색,
- 큐에서 현재 셀을 꺼내고, 인접한 셀을 탐색하여 땅(1)을 발견하면 탐색한 것으로 처리하고 큐에 추가

3. 개수 증가
- 하나의 섬을 모두 탐색한 후, count증가

4. 결과 반환
- 모든 셀을 검사 후 반환

*/