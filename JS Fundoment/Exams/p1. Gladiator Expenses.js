// function gladLoses(lost, priceHelmet, priceSword, priceShield, priceArmor) {
//
//     let countHelmet = 0;
//     let countSword = 0;
//     let countShield = 0;
//     let countArmor = 0;
//     for (let i = 1; i <= lost; i++) {
//         let repArmor = false;
//         if (i % 2 === 0) {
//             countHelmet++;
//         }
//
//         if (i % 3 === 0) {
//             countSword++;
//         }
//
//         if (i % 2 === 0 && i % 3 === 0) {
//             countShield++;
//             repArmor = true;
//         }
//
//         if (countShield % 2 === 0 && repArmor) {
//             countArmor++;
//         }
//     }
//
//     let sum = (countHelmet * +priceHelmet) + (countSword * +priceSword) +
//         (countShield * +priceShield) + (countArmor * +priceArmor);
//     console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
// }

gladLoses(
    7,
    2,
    3,
    4,
    5
);