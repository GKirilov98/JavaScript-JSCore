// function bitcoinsMining(arr) {
//     let counter =0;
//     let firstBitcoin = 0;
//     let countBitcoins = 0;
//     let bitcoins = 11949.16;
//     let levaSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let gold;
//         if ((i + 1) % 3 === 0) {
//             gold = arr[i] * 0.70;
//         } else {
//             gold = arr[i];
//         }
//
//         levaSum += gold * 67.51;
//         let buyBitcoins = Math.floor(levaSum / bitcoins);
//         if (buyBitcoins > 0) {
//             countBitcoins+=buyBitcoins;
//             counter++;
//             if (counter === 1){
//                 firstBitcoin = i + 1;
//             }
//
//             levaSum -= bitcoins * buyBitcoins;
//         }
//     }
//     console.log(`Bought bitcoins: ${countBitcoins}`);
//     if (firstBitcoin !== 0) {
//         console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
//     }
//        console.log(`Left money: ${levaSum.toFixed(2)} lv.`);
// }
//
// bitcoinsMining([3124.15, 504.212, 2511.124]);