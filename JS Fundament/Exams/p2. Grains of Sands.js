// function sandWatch(input) {
//     let arr = input[0].split(" ").map((x) => Number(x));
//     for (let i = 1; i < input.length ; i++) {
//         let tokens = input[i].split(" ");
//         let command = tokens[0].toLowerCase();
//         let value = +tokens[1];
//         switch (command) {
//             case 'add':
//                 arr.push(value);
//                 break;
//             case 'remove':
//                 let index = arr.indexOf(value);
//                 if (index !== -1){
//                     arr.splice(index, 1);
//                 } else {
//                     if (value < arr.length){
//                         arr.splice(value, 1);
//                     }
//                 }
//                 break;
//             case 'replace':
//                 let index2 = arr.indexOf(value);
//                 if (index2 !== -1){
//                     let replacement = tokens[2];
//                     arr.splice(index2,1, replacement);
//                 }
//                 break;
//             case 'increase':
//                 let increase = arr.filter((x) => x >= value);
//                 if (increase.length !== 0) {
//                     arr = arr.map((x) => x + increase[0]);
//                 } else {
//                     increase = +arr.slice(arr.length - 1,);
//                     arr =  arr.map((x) => x + increase);
//                 }
//                 break;
//             case 'collapse':
//                 let newArr = arr.filter((e) => e >= value);
//                arr = newArr;
//                 break;
//         }
//     }
//     console.log(arr.join(" "));
// }
//
//
// sandWatch([ '1 4 5 19 13 42 69 24',
//     'Add 1',
//     'Remove 3',
//     'Remove 4',
//     'Remove 15',
//     'Replace 0 26',
//     'Replace 1 26',
//     'Mort' ]);