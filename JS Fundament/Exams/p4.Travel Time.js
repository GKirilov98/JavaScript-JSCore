// function travelTime(arr) {
//     let travel = {};
//     for (let i = 0; i < arr.length; i++) {
//         let tokens = arr[i].split(" > ");
//         let country = tokens[0];
//         let neededMoney = +tokens[2];
//         let city = tokens[1].split("");
//         city[0] = city[0].toUpperCase();
//         city = city.join("");
//         if (travel[country] == null) {
//             travel[country] = {};
//         }
//
//         if (travel[country][city] == null) {
//             travel[country][city] = neededMoney;
//         } else if (travel[country][city] > neededMoney) {
//             travel[country][city] = neededMoney;
//         }
//     }
//     let country = Object.keys(travel)
//         .sort((a, b) => a.localeCompare(b));
//
//     for (let key of country) {
//         let city = Object.keys(travel[key]).sort((a, b) => {
//            return travel[key][a] - travel[key][b];
//         });
//        let string = `${key} ->`;
//         for (let i = 0; i < city.length; i++) {
//             string += ` ${city[i]} -> ${travel[key][city[i]]}`;
//         }
//         console.log(string);
//     }
// }
//
// travelTime(["Bulgaria > Sofia > 500",
//     "Bulgaria > sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"]
// );