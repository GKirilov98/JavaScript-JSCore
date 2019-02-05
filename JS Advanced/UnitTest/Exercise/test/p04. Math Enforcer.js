// const assert = require("chai").assert;
// let mathEnforcer = {
//     addFive: function (num) {
//         if (typeof(num) !== 'number') {
//             return undefined;
//         }
//         return num + 5;
//     },
//     subtractTen: function (num) {
//         if (typeof(num) !== 'number') {
//             return undefined;
//         }
//         return num - 10;
//     },
//     sum: function (num1, num2) {
//         if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
//             return undefined;
//         }
//         return num1 + num2;
//     }
// };
//
// describe("mathEnforcer", function () {
//     describe("addFive", function () {
//         it('should return undefined for not Number', function () {
//             let value = "pesho";
//             let result = mathEnforcer.addFive(value);
//             assert.equal(result, undefined);
//         });
//
//         it('should retun 9 for 4', function () {
//             let value = 4;
//             let result = mathEnforcer.addFive(value);
//             assert.equal(result, 9);
//         });
//
//         it('should retun -4 for -9', function () {
//             let value = -9;
//             let result = mathEnforcer.addFive(value);
//             assert.equal(result, -4);
//         });
//
//         it('should re', function () {
//             assert.equal(+mathEnforcer.addFive(5.4).toFixed(1), 10.4);
//             assert.equal(+mathEnforcer.addFive(-5.4).toFixed(1), -0.4);
//         });
//     });
//
//     describe("subtractTen", function () {
//         it('should return undefined for not a number', function () {
//             let value = "Pesho";
//             let result = mathEnforcer.subtractTen(value);
//             assert.equal(result, undefined);
//         });
//
//         it('should return 40 for 50', function () {
//             let val = 50;
//             let result = mathEnforcer.subtractTen(val);
//             assert.equal(result, 40);
//         });
//
//         it('should return -60 for -50', function () {
//             let val = -50;
//             let result = mathEnforcer.subtractTen(val);
//             assert.equal(result, -60);
//             assert.equal(+mathEnforcer.subtractTen(10.5).toFixed(1), 0.5);
//             assert.equal(+mathEnforcer.subtractTen(-10.5).toFixed(1), -20.5);
//         });
//     });
//
//     describe("sum", function () {
//         it('should return undefined for not Number', function () {
//             assert.equal(mathEnforcer.sum("string", "str"), undefined);
//             assert.equal(mathEnforcer.sum("string", 1), undefined);
//             assert.equal(mathEnforcer.sum("string", -1), undefined);
//             assert.equal(mathEnforcer.sum(2, "str"), undefined);
//             assert.equal(mathEnforcer.sum(-2, "str"), undefined);
//              assert.equal(mathEnforcer.sum(2, {}), undefined);
//             assert.equal(mathEnforcer.sum(-2, {}), undefined);
//             assert.equal(mathEnforcer.sum({},2), undefined);
//             assert.equal(mathEnforcer.sum({},-2), undefined);
//             assert.equal(mathEnforcer.sum({},{}), undefined);
//              assert.equal(mathEnforcer.sum([],2), undefined);
//             assert.equal(mathEnforcer.sum([], -2), undefined);
//             assert.equal(mathEnforcer.sum(2, []), undefined);
//             assert.equal(mathEnforcer.sum(-2, []), undefined);
//             assert.equal(mathEnforcer.sum([], []), undefined);
//         });
//
//         it('should return 13 for 4 + 9', function () {
//             let result = mathEnforcer.sum(4, 9);
//             assert.equal(result, 13);
//         });
//         it('should return 13 for -4 + 17', function () {
//             let result = mathEnforcer.sum(-4, 17);
//             assert.equal(result, 13);
//         });
//
//         it('should return -21 for -4 + -17', function () {
//             let result = mathEnforcer.sum(-4, -17);
//             assert.equal(result, -21);
//         });
//
//         it('should return 5.1 for 2.3 + 2.8 ', function () {
//             let result = +(mathEnforcer.sum(2.3, 2.8).toFixed(1));
//             assert.equal(result, 5.1);
//         });
//         it('should return 4.8 for 2 + 2.8 ', function () {
//             let result = +(mathEnforcer.sum(2, 2.8).toFixed(1));
//             assert.equal(result, 4.8);
//             let result2 = +(mathEnforcer.sum(-2, 2.8).toFixed(1));
//             assert.equal(result2, 0.8);
//         });
//     });
// });