// function f1Chamionship(arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         let tokens = arr[i].split(" -> ");
//         let team = tokens[0];
//         let pilot = tokens[1];
//         let points = +tokens[2];
//         if (obj[team] == null){
//             obj[team] = {};
//         }
//
//         if (obj[team][pilot] == null){
//             obj[team][pilot] = points;
//         } else {
//             obj[team][pilot] += points;
//         }
//     }
//
//     let teams = Object.keys(obj).sort((a, b) =>{
//       return Object.values(obj[b]).reduce((acc, curr) => acc + curr) - Object.values(obj[a]).reduce((acc, curr) => acc + curr);
//     });
//     let strLog = "";
//     let counter = 0;
//     for (let team of teams) {
//         counter++;
//         if (counter == 4){
//             break;
//         }
//         let points = Object.values(obj[team]).reduce((acc, cur) => acc + cur);
//         strLog += `${team}: ${points}\n`;
//        Object.keys(obj[team]).sort((a,b) => obj[team][b] - obj[team][a]).map((x) =>{
//             return strLog += `-- ${x} -> ${obj[team][x]}\n`;
//        });
//     }
//
//     console.log(strLog);
// }

f1Chamionship([
    'Ferrari -> Kimi Raikonnen -> 25',
    'Ferrari -> Sebastian Vettel -> 18',
    'Mercedes -> Lewis Hamilton -> 10',
    'Mercedes -> Valteri Bottas -> 8',
    'Red Bull -> Max Verstapen -> 6',
    'Red Bull -> Daniel Ricciardo -> 4',
    'Mercedes -> Lewis Hamilton -> 25',
    'Mercedes -> Valteri Bottas -> 18',
    'Haas -> Romain Grosjean -> 25',
    'Haas -> Kevin Magnussen -> 25'
    ]);