/*
BSD 2-Clause License

Copyright (c) 2018, Jakub Červený
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

Adapted from https://github.com/jakubcerveny/gilbert/blob/master/gilbert2d.py
*/
(function (root) {
    'use strict';
    function* generate(x, y, ax, ay, bx, by) {
        const width = Math.abs(ax + ay), height = Math.abs(bx + by);
        const dx = Math.sign(ax), dy = Math.sign(ay), ex = Math.sign(bx), ey = Math.sign(by);
        if (height === 1) {
            for (let i = 0; i < width; i++, x += dx, y += dy) yield [x, y];
            return;
        }
        if (width === 1) {
            for (let i = 0; i < height; i++, x += ex, y += ey) yield [x, y];
            return;
        }
        let ax2 = Math.floor(ax / 2), ay2 = Math.floor(ay / 2);
        let bx2 = Math.floor(bx / 2), by2 = Math.floor(by / 2);
        if (2 * width > 3 * height) {
            if (Math.abs(ax2 + ay2) % 2 && width > 2) { ax2 += dx; ay2 += dy; }
            yield* generate(x, y, ax2, ay2, bx, by);
            yield* generate(x + ax2, y + ay2, ax - ax2, ay - ay2, bx, by);
        } else {
            if (Math.abs(bx2 + by2) % 2 && height > 2) { bx2 += ex; by2 += ey; }
            yield* generate(x, y, bx2, by2, ax2, ay2);
            yield* generate(x + bx2, y + by2, ax, ay, bx - bx2, by - by2);
            yield* generate(x + ax - dx + bx2 - ex, y + ay - dy + by2 - ey, -bx2, -by2, -(ax - ax2), -(ay - ay2));
        }
    }
    function flowCells(count, columns) {
        if (!count) return [];
        const cells = [], bandHeight = Math.max(2, 2 * Math.ceil(columns / 2));
        let remaining = count, row = 0;
        // Complete compact bands from top to bottom, so unused cells occur
        // only near the end of the collection, never at the top of the page.
        while (remaining) {
            const rows = Math.min(bandHeight, Math.ceil(remaining / columns));
            const vertical = rows % 2 === 0 || columns % 2 !== 0;
            const path = vertical ? generate(0, 0, 0, rows, columns, 0) : generate(0, 0, columns, 0, 0, rows);
            const take = Math.min(remaining, columns * rows);
            for (const [x, y] of path) {
                cells.push([x, y + row]);
                if (cells.length === count) break;
            }
            remaining -= take; row += rows;
        }
        return cells;
    }
    // Trace the union of occupied cells, then inset and round its contour.
    function outline(cells, cellWidth, cellHeight) {
        const filled = new Set(cells.map(cell => cell.join(','))), edges = new Map();
        const edge = (a, b) => {
            const key = a.join(',');
            if (!edges.has(key)) edges.set(key, []);
            edges.get(key).push(b);
        };
        cells.forEach(([x, y]) => {
            if (!filled.has([x, y - 1].join(','))) edge([x, y], [x + 1, y]);
            if (!filled.has([x + 1, y].join(','))) edge([x + 1, y], [x + 1, y + 1]);
            if (!filled.has([x, y + 1].join(','))) edge([x + 1, y + 1], [x, y + 1]);
            if (!filled.has([x - 1, y].join(','))) edge([x, y + 1], [x, y]);
        });
        const contours = [];
        while (edges.size) {
            const start = edges.keys().next().value, vertices = [];
            let key = start, previousDirection = 0;
            do {
                const point = key.split(',').map(Number), choices = edges.get(key);
                vertices.push([point[0] * cellWidth, point[1] * cellHeight]);
                const direction = next => next[0] > point[0] ? 0 : next[1] > point[1] ? 1 : next[0] < point[0] ? 2 : 3;
                choices.sort((a, b) => {
                    const rank = next => [1, 0, 3, 2][(direction(next) - previousDirection + 4) % 4];
                    return rank(a) - rank(b);
                });
                const next = choices.shift(); previousDirection = direction(next);
                if (!choices.length) edges.delete(key);
                key = next.join(',');
            } while (key !== start);
            contours.push(vertices);
        }
        return contours.map(vertices => {
        const points = vertices.filter((v, i) => {
            const a = vertices[(i + vertices.length - 1) % vertices.length], b = vertices[(i + 1) % vertices.length];
            return (v[0] - a[0]) * (b[1] - v[1]) !== (v[1] - a[1]) * (b[0] - v[0]);
        });
        const unit = (a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], length = Math.hypot(dx, dy); return [dx / length, dy / length]; };
        const inset = points.map((v, i) => {
            const a = unit(points[(i + points.length - 1) % points.length], v), b = unit(v, points[(i + 1) % points.length]);
            return [v[0] - (a[1] + b[1]) * 7, v[1] + (a[0] + b[0]) * 7];
        });
        return inset.map((v, i) => {
            const a = unit(inset[(i + inset.length - 1) % inset.length], v), b = unit(v, inset[(i + 1) % inset.length]);
            const before = [v[0] - a[0] * 17, v[1] - a[1] * 17], after = [v[0] + b[0] * 17, v[1] + b[1] * 17];
            return `${i ? 'L' : 'M'}${before.join(',')}Q${v.join(',')} ${after.join(',')}`;
        }).join('') + 'Z';
        }).join('');
    }
    // Find the longest uninterrupted span on the first occupied row.
    function topRun(cells) {
        const row = Math.min(...cells.map(cell => cell[1]));
        const columns = cells.filter(cell => cell[1] === row).map(cell => cell[0]).sort((a, b) => a - b);
        let start = columns[0], length = 1, bestStart = start, bestLength = length;
        for (let i = 1; i < columns.length; i++) {
            if (columns[i] === columns[i - 1] + 1) length++;
            else { start = columns[i]; length = 1; }
            if (length > bestLength) { bestStart = start; bestLength = length; }
        }
        return { column: bestStart, row, length: bestLength };
    }

    root.SHOP_LAYOUT = { flowCells, outline, topRun };
})(typeof window === 'undefined' ? globalThis : window);
