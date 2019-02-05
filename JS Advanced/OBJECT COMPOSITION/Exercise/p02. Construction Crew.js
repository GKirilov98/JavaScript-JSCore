// function result(obj) {
//     let fixedWorker = Object.create(obj);
//     fixWorker();
//
//     function fixWorker() {
//         if (fixedWorker.handsShaking === false) {
//             return fixedWorker;
//         }
//
//         for (const key in obj) {
//             fixedWorker[key] = obj[key];
//         }
//         fixedWorker.handsShaking = false;
//         fixedWorker.bloodAlcoholLevel = 0.1 * obj.weight * obj.experience + obj.bloodAlcoholLevel;
//         return fixedWorker;
//     }
//     return fixedWorker;
// }

let worker = result({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }
);