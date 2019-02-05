// function airPollution(input, arr) {
//     let matrix = [];
//     for (let i = 0; i < input.length; i++) {
//         matrix.push(input[i].split(" ").map((x) => +x));
//     }
//
//     for (let i = 0; i < arr.length; i++) {
//         let tokens = arr[i].split(" ");
//         let command = tokens[0];
//         let num = tokens[1];
//         switch (command) {
//             case "breeze":
//                 matrix[num] = matrix[num].map((x) => x - 15);
//                 break;
//             case "gale":
//                 for (let j = 0; j < matrix.length; j++) {
//                     matrix[j][num] = matrix[j][num] - 20;
//                 }
//                 break;
//             case "smog":
//                 matrix = matrix.map((a) => {
//                     return a.map((x) => x + +num);
//                 });
//                 break;
//         }
//
//         matrix = matrix.map((a) => {
//             return a.map((x) => {
//                 if (x < 0) {
//                     x = 0;
//                 }
//
//                 return x;
//             });
//         });
//     }
//
//     let pollutions = [];
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] >= 50) {
//                 pollutions.push([i, j]);
//             }
//         }
//     }
//
//     if (pollutions.length === 0) {
//         console.log("No polluted areas");
//     } else {
//         console.log(`Polluted areas: ${pollutions.map((x) =>{ return "[" + x.join("-") + "]"}).join(", ")}`)
//     }
// }

airPollution([
    '5 7 3 28 32',
    '41 12 49 30 33',
    '3 16 20 42 12',
    '2 20 10 39 14',
    '7 34 4 27 24'],
    ['smog 11',
    'gale 3',
    'breeze 1',
    'smog 2']
);