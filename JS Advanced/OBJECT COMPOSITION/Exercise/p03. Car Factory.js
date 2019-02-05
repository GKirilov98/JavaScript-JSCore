// function result(obj) {
//     let itemsCar = {
//         smallEngine: {power: 90, volume: 1800},
//         normalEngine: {power: 120, volume: 2400},
//         monsterEngine: {power: 200, volume: 3500},
//
//         hatchback: {type: 'hatchback', color: `${obj.color}`},
//         coupe: {type: 'coupe', color: `${obj.color}`}
//     };
//     let newCar = {};
//     fixTheCar();
//     function fixTheCar() {
//         newCar.model = obj.model;
//         if (obj.power <= 90) {
//             newCar.engine = itemsCar.smallEngine;
//         } else if (obj.power <= 120) {
//             newCar.engine = itemsCar.normalEngine;
//         } else {
//             newCar.engine = itemsCar.monsterEngine;
//         }
//
//         if (obj.carriage === 'hatchback') {
//             newCar.carriage = itemsCar.hatchback;
//         } else {
//             newCar.carriage = itemsCar.coupe
//         }
//
//         if (Math.floor(obj.wheelsize) % 2 === 0) {
//             obj.wheelsize--;
//         }
//
//         newCar.wheels = [Math.floor(obj.wheelsize),
//             Math.floor(obj.wheelsize),
//             Math.floor(obj.wheelsize),
//             Math.floor(obj.wheelsize)];
//     }
//
//     return newCar;
// }


let input = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};
let output = result(input);
console.log(output);