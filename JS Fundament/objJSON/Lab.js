// function townToJSON(arr) {
//     let arrJson = [];
//     let names = arr[0].split("|").filter((x) => x !== "").map((x) => x.trim());
//     for (let i = 1; i < arr.length; i++) {
//         let tokens = arr[i].split("|").filter((x) => x !== "").map((x) => x.trim());
//         let townName = names[0];
//         let latitude = names[1];
//         let longitude = names[2];
//         let obj = {};
//         obj[townName] = tokens[0];
//         obj[latitude] = +tokens[1];
//         obj[longitude] = +tokens[2];
//         arrJson.push(obj);
//     }
//     console.log(JSON.stringify(arrJson));
// }
//
// //townToJSON(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |','| Beijing | 39.913818 | 116.363625 |']);
//
// function scoreHtml(arr) {
//     let arrNotJson = JSON.parse(arr).map((x,) => {
//         let name = x.name;
//         let score = +x.score;
//         return [name, score];
//     });
//     let html = "<table>\n  <tr><th>name</th><th>score</th></tr>\n"
//     for (let i = 0; i < arrNotJson.length; i++) {
//         let tokens = arrNotJson[i];
//         html += `  <tr><td>${tokens[0].split("&").join("&amp;")}</td><td>${tokens[1]}</td></tr>\n`;
//     }
//     console.log(html + "</table>");
// }
//
// //scoreHtml(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']);
//
// function sumByTown(arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i += 2) {
//         let city = arr[i];
//         let population = +arr[i + 1];
//         if (obj[city]) {
//             obj[city] += population;
//         } else {
//             obj[city] = population;
//         }
//     }
//     console.log(JSON.stringify(obj));
// }
//
// //sumByTown(['Sofia','20','Varna','3','Sofia','5','Varna','4']);
//
// function countWordsInText(arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         let text = arr[i];
//         let tokens = text.split(/\W+/).filter((x) => x !== "").map((word) => {
//             if (obj[word]) {
//                 obj[word]++;
//             } else {
//                 obj[word] = 1;
//             }
//         });
//     }
//     console.log(JSON.stringify(obj));
// }
//
// //countWordsInText(["Far too slow, you're far too slow."]);
//
// function sortCountWordsInText(arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         let text = arr[i];
//         let tokens = text.split(/\W+/).filter((x) => x !== "").map((word) => {
//             let lower = word.toLowerCase();
//             if (obj[lower]) {
//                 obj[lower]++;
//             } else {
//                 obj[lower] = 1;
//             }
//         });
//     }
//     Object.keys(obj).sort().map((s) => console.log(`'${s}' -> ${obj[s]} times`));
// }
//
// //sortCountWordsInText(["Far too slow, you're far too slow."]);
//
// function populationInTown(arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         let tokens = arr[i].split(" <-> ");
//         let city = tokens[0];
//         let populations = tokens[1];
//         if (obj[city]) {
//             obj[city] += populations;
//         } else {
//             obj[city] = populations;
//         }
//     }
//     for (let objElement in obj) {
//         console.log(`${objElement} : ${obj[objElement]}`)
//     }
// }
//
// //populationInTown(['Sofia <-> 1200000','Montana <-> 20000','New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000'])
//
// function cityMarket(arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         let tokens = arr[i].split(" -> ");
//         let tokens2 = tokens[2].split(" : ");
//         let city = tokens[0];
//         let product = tokens[1];
//         let price = +tokens2[0] * +tokens2[1];
//
//         if (obj[city] == null) {
//             obj[city] = {};
//         }
//         obj[city][product] = price;
//     }
//     let cities = Object.keys(obj);
//     for (let i = 0; i < cities.length; i++) {
//         console.log(`Town - ${cities[i]}`);
//         Object.keys(obj[cities[i]]).forEach((x) => {
//             console.log(`$$$${x} : ${obj[cities[i]][x]}`)
//         })
//     }
// }
//
// //cityMarket(['Sofia -> Laptops HP -> 200 : 2000','Sofia -> Raspberry -> 200000 : 1500','Sofia -> Audi Q7 -> 200 : 100000','Montana -> Portokals -> 200000 : 1','Montana -> Qgodas -> 20000 : 0.2','Montana -> Chereshas -> 1000 : 0.3']);
//
// function lowestPriceInCities(arr) {
//     let obj = {};
//     let productObj = {};
//     for (let i = 0; i < arr.length; i++) {
//         let tokens = arr[i].split(" | ");
//         let city = tokens[0];
//         let product = tokens[1];
//         let price = tokens[2];
//         if (obj[city] == null) {
//             obj[city] = {};
//         }
//
//         obj[city][product] = price;
//
//         if (productObj[product] > price) {
//                 productObj[product] = price;
//         } else {
//             productObj[product] = price;
//         }
//     }
//
//     Object.keys(productObj).map((x) => {
//         let price = productObj[x];
//         let product = x;
//         let cityArr = Object.keys(obj);
//         let city = "";
//         for (let i = 0; i < cityArr.length; i++) {
//             if (obj[cityArr[i]][product] === price){
//                 city = cityArr[i];
//             }
//         }
//         console.log(`${x} -> ${productObj[x]} (${city})`)
//     });
// }
//
// lowestPriceInCities(['Sofia City | Audi | 100000',
//    'Sofia City | BMW | 100000',
//    'Sofia City | Mitsubishi | 10000',
//    'Sofia City | Mercedes | 10000',
//    'Sofia City | NoOffenseToCarLovers | 0',
//    'Mexico City | Audi | 1000',
//    'Mexico City | BMW | 99999',
//    'New York City | Mitsubishi | 10000',
//    'New York City | Mitsubishi | 1000',
//    'Mexico City | Audi | 100000',
//    'Washington City | Mercedes | 1000'
// ]);