// let assert = require("chai").assert;
// class Calculator {
//     constructor() {
//         this.expenses = [];
//     }
//
//     add(data) {
//         this.expenses.push(data);
//     }
//
//     divideNums() {
//         let divide;
//         for (let i = 0; i < this.expenses.length; i++) {
//             if (typeof (this.expenses[i]) === 'number') {
//                 if (i === 0 || divide===undefined) {
//                     divide = this.expenses[i];
//                 } else {
//                     if (this.expenses[i] === 0) {
//                         return 'Cannot divide by zero';
//                     }
//                     divide /= this.expenses[i];
//                 }
//             }
//         }
//         if (divide !== undefined) {
//             this.expenses = [divide];
//             return divide;
//         } else {
//             throw new Error('There are no numbers in the array!')
//         }
//     }
//
//     toString() {
//         if (this.expenses.length > 0)
//             return this.expenses.join(" -> ");
//         else return 'empty array';
//     }
//
//     orderBy() {
//         if (this.expenses.length > 0) {
//             let isNumber = true;
//             for (let data of this.expenses) {
//                 if (typeof data !== 'number')
//                     isNumber = false;
//             }
//             if (isNumber) {
//                 return this.expenses.sort((a, b) => a - b).join(', ');
//             }
//             else {
//                 return this.expenses.sort().join(', ');
//             }
//         }
//         else return 'empty';
//     }
// }
//
// describe("Calculator", function() {
//     let output;
//     beforeEach(function () {
//        output  = new Calculator();
//     });
//    describe("add(num)", function () {
//        it('should expenses be 0 length', function () {
//            let p = new Calculator();
//            assert.equal(p.expenses.length,0);
//        });
//
//        it('should add string', function () {
//            let s = new Calculator();
//            s.add("pesho");
//            let result = s.expenses;
//            assert.equal(result,"pesho");
//        });
//
//        it('should add positive, negative number and flood num', function () {
//            let calc = new Calculator();
//            calc.add(12);
//            let positive = calc.expenses;
//            assert.equal(positive,12 );
//            calc.add(-45);
//            let negative = calc.expenses[calc.expenses.length -1];
//            assert.equal(negative, -45);
//            calc.add(4.502);
//            let floodPositive = calc.expenses[calc.expenses.length -1];
//            assert.equal(floodPositive,4.502);
//            calc.add(-8.76);
//            let floodNegative = calc.expenses[calc.expenses.length -1];
//            assert.equal(floodNegative,-8.76)
//        });
//    });
//     describe('divideNums()', function () {
//         it('should throw error for dont have num', function () {
//             output.add("Pesho");
//             output.add("5");
//             assert.throws(()=>output.divideNums(), 'There are no numbers in the array!' )
//         });
//         it('should return Cannot divide by zero for 0', function () {
//             output.add(3);
//             output.add(0);
//             assert.equal(output.divideNums(), "Cannot divide by zero");
//         });
//         it('should return num for 6 and 2', function () {
//             output.add(6);
//             output.add(2);
//             assert.equal(output.divideNums(), 3);
//         });
//         it('should return num for flood', function () {
//             output.add(4.2);
//             output.add(2.1);
//             assert.equal(output.divideNums(), 2);
//         });
//         it('should return num for negative', function () {
//             output.add(-3);
//             output.add(-4.5);
//             assert.equal(+output.divideNums().toFixed(2), 0.67)
//         });
//         it('should return same num for 1 lenght', function () {
//             output.add(3);
//             assert.equal(output.divideNums(), 3);
//         });
//     });
//     describe('toString', function () {
//         it('should return "empty array" for empty arr', function () {
//             assert.equal(output.toString(), "empty array");
//         });
//         it('should return arr joined by " -> "', function () {
//             output.add(4);
//             output.add(4.3);
//             output.add(-4.3);
//             assert.equal(output.toString(),"4 -> 4.3 -> -4.3")
//         });
//     });
//     describe('orderBy', function () {
//         it('should return "empty" for empty', function () {
//             assert.equal(output.orderBy(), "empty");
//         });
//         it('should return joinby ", " for string', function () {
//             output.add("Anna");
//             output.add("Bendji");
//             assert.equal(output.orderBy(),"Anna, Bendji")
//         });
//         it('should return sorted for number', function () {
//             output.add(4);
//             output.add(-3);
//             output.add(5.2);
//             assert.equal(output.orderBy(), "-3, 4, 5.2")
//         });
//     });
// });
//
