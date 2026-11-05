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
    root.SHOP_LAYOUT = { flowCells };
})(typeof window === 'undefined' ? globalThis : window);
