// function arena(arr) {
//     let allGladiators = {};
//     for (let i = 0; i < arr.length - 1; i++) {
//         let tokens = arr[i].split(" -> ");
//         if (tokens.length === 3) {
//             let name = tokens[0];
//             let item = tokens[1];
//             let points = +tokens[2];
//             if (allGladiators[name] == null) {
//                 allGladiators[name] = {};
//             }
//
//             if (allGladiators[name][item] == null) {
//                 allGladiators[name][item] = points;
//             } else if (allGladiators[name][item] < points) {
//                 allGladiators[name][item] = points;
//             }
//         } else {
//             tokens = arr[i].split(" vs ");
//             let firstGladiator = tokens[0];
//             let secondGladiator = tokens[1];
//             if (allGladiators[firstGladiator] == null || allGladiators[secondGladiator] == null) {
//                 continue;
//             }
//             let equipFirst = Object.keys(allGladiators[firstGladiator]);
//             let equipSecond = Object.keys(allGladiators[secondGladiator]);
//             let battle = false;
//             for (let j = 0; j < equipFirst.length; j++) {
//                 for (let k = 0; k < equipSecond.length; k++) {
//                     if (equipFirst[j] === equipSecond[k]) {
//                         battle = true;
//                         break;
//                     }
//                 }
//
//                 if (battle) {
//                     break;
//                 }
//             }
//
//             if (battle) {
//                 let pointsFirst = Object.values(allGladiators[firstGladiator]).reduce((acc, cur) => acc + cur);
//                 let pointsSecond = Object.values(allGladiators[secondGladiator]).reduce((acc, cur) => acc + cur);
//
//                 if (Math.min(pointsFirst, pointsSecond) === pointsFirst) {
//                     allGladiators[firstGladiator] = null;
//                 } else {
//                     allGladiators[secondGladiator] = null;
//                 }
//             }
//         }
//     }
//
//     let name = Object.keys(allGladiators).filter((x) => allGladiators[x] != null).sort((a, b) => {
//         let first = Object.values(allGladiators[a]).reduce((acc, cur) => acc + cur);
//         let second = Object.values(allGladiators[b]).reduce((acc, cur) => acc + cur);
//         return second - first || a.localeCompare(b);
//     });
//     for (let gladiator of name) {
//         let totalPoints = Object.values(allGladiators[gladiator]).reduce((acc, cur) => acc + cur);
//         console.log(`${gladiator}: ${totalPoints} skill`);
//         Object.keys(allGladiators[gladiator]).sort((a,b) =>{
//             return allGladiators[gladiator][b] - allGladiators[gladiator][a] || a.localeCompare(b);
//         }).map((x) => {
//             console.log(`- ${x} <!> ${allGladiators[gladiator][x]}`)
//         })
//     }
// }

arena([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
]);
