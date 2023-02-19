// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// From 0 to n (iterate through rows)
// Create an empty string, 'level'
// From 0 to ??? (columns)
    // IF the column should have a #
        // Add a '#' to 'level'
    // ELSE
        // Add a space to 'level'
// Console log 'stair'

// function bounds(row, length) {
//     const pounds = ((row * 2) - 1);
//     let bounds = [];
//     const outer = length - pounds;

//     for (let i = 1; i <= length; i++) {
//         bounds.push(i);
//     }

//     if (outer) {
//         return bounds.slice((outer/2), -1*(outer/2));
//     }

//     return bounds;
// }

// function buildLine(n, row) {
//     let line = '';
//     const length = ((n * 2) - 1);

//     const upperLowerBounds = bounds(row, length);
//     for (let col = 1; col <= length; col++) {
//         if (upperLowerBounds.includes(col)) {
//             line += '#';
//         } else {
//             line += ' ';
//         }
//     }

//     return line
// }

// function pyramid(n) {
//     let i = 1;
//     while (i <= n) {
//         const stair = buildLine(n, i);
//         console.log(stair);
//         i++;
//     }
    
//     return;
// }

// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2);
//     for (let row = 0; row < n; row++) {
//         let level = '';

//         for (let column = 0; column < 2 * n - 1; column++) {
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }

//         }
//         console.log(level);
//     }
// }

function pyramid(n, row = 0, level = '') {
    if (n === row) {
        return;
    }

    if (level.length === ((2 * n) -1)) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;

    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }

    pyramid(n, row, level + add)
}

module.exports = pyramid;
