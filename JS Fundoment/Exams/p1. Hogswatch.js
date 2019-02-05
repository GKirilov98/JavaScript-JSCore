// function hogswatch(arr) {
//     let initialPresents = +arr[1];
//     let wentBack = 0;
//     let gotPresent = 0;
//     for (let i = 2; i < arr.length; i++) {
//         initialPresents -= +arr[i];
//         if (initialPresents < 0){
//             let neededPresents = Math.abs(initialPresents);
//             initialPresents = Math.floor((arr[1] / (i - 1))) * (arr.length - i - 1) + neededPresents;
//             gotPresent += initialPresents;
//             initialPresents -= neededPresents;
//             wentBack++;
//         }
//     }
//
//     if (wentBack !== 0){
//         console.log(`${wentBack}\n${gotPresent}`);
//     } else {
//         console.log(`${initialPresents}`);
//     }
// }
//
// hogswatch(['5',
//     '10',
//     '4',
//     '5',
//     '3',
//     '4',
//     '5'
// ]);