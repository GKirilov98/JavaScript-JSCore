// function ancientVsMemory(arr) {
//     let text = arr.toString().split("32656 19759 ").filter((x) => x != '');
//     let regex = /(?:32763 0 )(\d+) 0 (.+?) 0/;
//     for (let i = 0; i < text.length; i++) {
//       let match = text[i].match(regex);
//         let name = match[match.length - 1];
//       //  let word = "";
//       //  for (let j = 0; j < +match[match.length - 2]; j++) {
//       //      word += name[j] + " ";
//       //  }
//       //  word = word.split(" ").filter((x) => x != '').map((x) => String.fromCharCode(+x)).join("");
//       // console.log(word);
//
//     }
// }
// only 40points!!!!!!!!!!!!!!
// ancientVsMemory(['32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0', "32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0"]
// );