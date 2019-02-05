// function travelPlans(arr) {
//
//     let professions = ["Programming", "Hardware maintenance", "Cooking", "Translating", "Designing"];
//     let average = ["Driving", "Managing", "Fishing", "Gardening"];
//     let clumsy = ["Singing", "Accounting", "Teaching", "Exam-Making", "Acting", "Writing", "Lecturing", "Modeling", "Nursing"];
//     let saveMoney = 0;
//     let specCustomer = 0;
//     let clumsyCustomer = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let token = arr[i].split(" : ");
//         let job = token[0];
//         let gold = +token[1];
//         if (professions.indexOf(job) >= 0 && gold >= 200) {
//             gold *= 0.80;
//             saveMoney += gold;
//             specCustomer++;
//             if (specCustomer % 2 === 0) {
//                 saveMoney += 200;
//             }
//         } else if (average.indexOf(job) >= 0) {
//             saveMoney += gold;
//         } else if (clumsy.indexOf(job) >= 0) {
//             clumsyCustomer++;
//             if (clumsyCustomer % 2 === 0) {
//                 gold *= 0.95;
//             } else if (clumsyCustomer % 3 === 0) {
//                 gold *= 0.90;
//             }
//             saveMoney += gold;
//         }
//     }
//
//     if (saveMoney >= 1000){
//         console.log(`Final sum: ${saveMoney.toFixed(2)}\nMariyka earned ${(saveMoney - 1000).toFixed(2)} gold more.`)
//     } else {
//         console.log(`Final sum: ${(saveMoney).toFixed(2)}\nMariyka need to earn ${(1000 - saveMoney).toFixed(2)} gold more to continue in the next task.`)
//     }
// }

travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);