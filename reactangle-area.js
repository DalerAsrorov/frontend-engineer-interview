/*
Find area of union of 3 rectangles given that the sides are parallel to the x and y-axes

let rect1 = [[0, 0], [0,2], [2, 2], [2, 0]];
let rect2 = [[0, 0], [0,3], [1, 3], [1, 0]];


+-+
|1|
+-+-+
|X|Y|
+-+-+--------+
|A|Z|  N     |
+-+-+--------+

once you figure overlap of rect12 = XA
then overlap of rect123 = overlapXA and AZN

5 = 3 (rect2) + 4 (rect1) - 2 (2A)
total = rect1 + rect2 - overlap

total (1+X+Y+Z+A+N) = rect1(1+X+A) + rect2(X+Y+A+Z) + rect3(A+Z+N)
 - rect1+2overlap (X+A)
 - rect2+3overlap (A)
 - rect3+1overlap (A+Z)
 + rect123overlap (A)
 
  +-+
  |1|
+-+-+-+ top of A
| | | |
| | | |
|Y|A|Z|
+-+-+-+ bottom of A
  |2|
  +-+

left of A. right of A

to overlap the third rectangle
you can take A as one of your rectangles

+---+
|YAZ|
+---+ bottom of A

+---+ top of A
|1A2|
+---+

bottom of A = max(YAZ_bot, 1A2_bot)
top of A = min(YAZ_top, 1A2_top)
*/

let rect1 = [[0, 0], [0, 2], [2, 2], [2, 0]];
let rect2 = [[1, 1], [1, 3], [3, 3], [3, 1]];
let rect3 = [[2, 2], [2, 5], [5, 5], [5, 2]];

function calcArea(rect) {
    let h = Math.abs(rect[0][1] - rect[1][1]);
    let w = Math.abs(rect[0][0] - rect[2][0]);

    return h * w;
}

function getArea(rect1, rect2, rect3) {
    const total = (1 + A) + (Y + A + Z);

    // arr.sort((a, b) => {
    //    if (a[3][0] > b[3][0] && a[3][1] > b[3][1]) {
    //        return 1;
    //    } else if (a[3][0] < b[3][0] && a[3][1] < b[3][1]) {
    //        return -1;
    //    }
    //    return 0;
    // });

    let firstArea = calcArea(rect1);
    let secondArea = calcArea(rect2);
    let thirdArea = calcArea(rect3);

}

console.log(getArea(rect1, rect2, rect3));