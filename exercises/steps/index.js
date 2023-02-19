// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function buildLine(pounds, row) {
//     let line = '';
//     let col = 1;
//     while (col <= pounds) {
//         const char = col <= row ? '#': ' ';
//         line += char;
//         col ++
//     }

//     return line;
// }   

// function steps(n) {
//     row = 1;
//     while (row <= n) {
//         console.log(buildLine(n, row));
//         row++
//     }
//     return
// }

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';
        
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }

//         console.log(stair);
//     }
// }

function steps(n, row = 0, stair = '') {
    // All work has been done. End Recursion
    if (n === row) {
        return;
    }

    // Is the row finished
    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    // Current row is not finished
    const add = stair.length <= row ? '#' : ' ';

    // Move to next row
    steps(n, row, stair + add);
}

module.exports = steps;
