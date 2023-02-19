// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// function charMap(string) {
//     const charMap = {}

//     for (let char of string) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap
// }

// function charsOnly(string) {
//     return string.replace(/[^\w]/g, "").toLowerCase();
// }

// function anagrams(stringA, stringB) {
//     // generate character maps for both strings
//     const map1 = charMap(charsOnly(stringA));
//     const map2 = charMap(charsOnly(stringB));
//     // compare length of each keys array
//     if (Object.keys(map1).length !== Object.keys(map2).length) {
//         return false
//     }
//     // if keys length of each array is not equal
//     for (const property in map1) {
//         if (!(property in map2)) {
//             return false;
//         }
//     }

//     return true;
// }

function anagrams(stringA, stringB) {
   return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;
