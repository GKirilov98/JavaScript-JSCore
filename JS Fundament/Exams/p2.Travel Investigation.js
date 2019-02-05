// function travelInvest(arr) {
//     let delimiter = arr[1];
//     let company = arr[0].split(delimiter);
//     let validText = [];
//     let invalidText = [];
//     for (let i = 2; i < arr.length; i++) {
//         let text = arr[i].toLowerCase();
//         let valid = true;
//         for (let j = 0; j < company.length; j++) {
//             if (text.indexOf(company[j]) === -1) {
//                 valid = false;
//             }
//         }
//         if (valid) {
//             validText.push(text);
//         } else {
//             invalidText.push(text);
//         }
//     }
//
//     if (invalidText.length === 0){
//         console.log("ValidSentences");
//         validText.forEach((value, index) => {console.log(`${index + 1}. ${value}`)});
//     } else if (validText.length === 0){
//         console.log("InvalidSentences");
//         invalidText.forEach((value, index) => {console.log(`${index + 1}. ${value}`)});
//     } else {
//         console.log("ValidSentences");
//         validText.forEach((value, index) => {console.log(`${index + 1}. ${value}`)});
//         console.log("==============================");
//         console.log("InvalidSentences");
//         invalidText.forEach((value, index) => {console.log(`${index + 1}. ${value}`)});
//     }
// }
//
// travelInvest([
//     'bulgariatour@, minkatrans@, koftipochivkaltd',
//
//     '@,',
//
//     'Mincho   e  KoftiPochivkaLTD Tip 123   ve MinkaTrans BulgariaTour',
//
//     'We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour',
//
//     'dqdo BuLGariaTOUR mraz  some text but is KoftiPochivkaLTD minkaTRANS']
// );