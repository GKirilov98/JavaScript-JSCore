// function gladInvent(input) {
//     let arr = input[0].split(" ");
//     for (let i = 1; i < input.length - 1; i++) {
//         let tokens = input[i].split(" ");
//         let command = tokens[0].toLowerCase();
//         let item = tokens[1];
//
//         switch (command) {
//             case 'buy':
//                 if (arr.indexOf(item) === -1) {
//                     arr.push(item);
//                 }
//                 break;
//             case 'trash':
//                 if (arr.indexOf(item) !== -1) {
//                     arr.splice(arr.indexOf(item), 1);
//                 }
//                 break;
//             case "repair":
//                 if (arr.indexOf(item) !== -1) {
//                     let repair = arr.splice(arr.indexOf(item), 1);
//                     arr.push(repair);
//                 }
//                 break;
//             case "upgrade":
//                 let token = item.split("-");
//                 let equip = token[0];
//                 let upgrade = token[1];
//                 let upgraded = equip + ":" + upgrade;
//                 if (arr.indexOf(equip) !== -1 && arr.indexOf(upgraded) === -1) {
//                     arr.splice(arr.indexOf(equip), 1, equip, upgraded);
//                 }
//                 break;
//         }
//     }
//
//     console.log(arr.join(" "));
// }
//
// gladInvent([
//     'SWORD Shield Spear',
//     'Buy Bag',
//     'Trash Shield',
//     'Repair Spear',
//     'Upgrade SWORD-Steel',
//     'Fight!'
// ]);