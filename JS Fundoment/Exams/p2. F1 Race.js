// function f1Race(arr) {
//     let allRacers = arr[0].split(" ");
//     for (let i = 1; i < arr.length; i++) {
//         let tokens = arr[i].split(" ");
//         let command = tokens[0].toLowerCase();
//         let racer = tokens[1];
//
//         switch (command) {
//             case 'join':
//                 if (allRacers.indexOf(racer) !== -1) {
//                     continue;
//                 }
//
//                 allRacers.push(racer);
//                 break;
//             case 'crash':
//                 if (allRacers.indexOf(racer) === -1) {
//                     continue;
//                 }
//
//                 allRacers.splice(allRacers.indexOf(racer), 1);
//                 break;
//             case 'overtake':
//                 if (allRacers.indexOf(racer) === -1 || allRacers.indexOf(racer) === 0) {
//                     continue;
//                 }
//
//                 let racerBefore = allRacers[allRacers.indexOf(racer) - 1];
//                 let racerNow = allRacers[allRacers.indexOf(racer)];
//                 allRacers.splice(allRacers.indexOf(racer) - 1, 2, racerNow, racerBefore);
//                 break;
//             case 'pit':
//                 if (allRacers.indexOf(racer) === -1) {
//                     continue;
//                 }
//
//                 let racerAfter = allRacers[allRacers.indexOf(racer) + 1];
//                 let racerNow2 = allRacers[allRacers.indexOf(racer)];
//                 allRacers.splice(allRacers.indexOf(racer), 2, racerAfter, racerNow2);
//                 break;
//         }
//     }
//
//     console.log(allRacers.join(" ~ "));
// }

f1Race([
    'Vetel Hamilton Slavi',
    'Pit Hamilton',
    'Overtake Vetel',
    'Crash Slavi'
    ]
);