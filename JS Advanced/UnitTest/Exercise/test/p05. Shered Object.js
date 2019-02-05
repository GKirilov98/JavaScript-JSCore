// const assert = require("chai").assert;
// const jsdom = require("jsdom-global")();
// const $ = require("jquery");
// const expect = require("chai").expect;
//
// document.body.innerHTML = `<div id="wrapper">
//         <input type="text" id="name">
//         <input type="text" id="income">
//     </div>
// `;
//
// let sharedObject = {
//     name: null,
//     income: null,
//     changeName: function (name) {
//         if (name.length === 0) {
//             return;
//         }
//         this.name = name;
//         let newName = $('#name');
//         newName.val(this.name);
//     },
//     changeIncome: function (income) {
//         if (!Number.isInteger(income) || income <= 0) {
//             return;
//         }
//         this.income = income;
//         let newIncome = $('#income');
//         newIncome.val(this.income);
//     },
//     updateName: function () {
//         let newName = $('#name').val();
//         if (newName.length === 0) {
//             return;
//         }
//         this.name = newName;
//     },
//     updateIncome: function () {
//         let newIncome = $('#income').val();
//         if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
//             return;
//         }
//         this.income = Number(newIncome);
//     }
// };
//
// describe("sharedObject", function () {
//     describe("changeName", function () {
//         it('should name and income be null', function () {
//             assert.equal(sharedObject.name, null);
//            // assert.equal(sharedObject.income, null);
//                 assert.equal($('#name').val(), '');
//              //   assert.equal($('#income').val(), '')
//         });
//         it('should return undefined for ""', function () {
//             let result = sharedObject.changeName("");
//             assert.equal(result, undefined)
//         });
//
//         it('should return pesho for pesho', function () {
//             sharedObject.name = "Gosho";
//             sharedObject.changeName("pesho");
//             assert.equal($('#name').val(), "pesho");
//             assert.equal(sharedObject.name, "pesho")
//         });
//
//         it('should change name to num', function () {
//             sharedObject.changeName(13);
//             assert.equal($('#name').val(), "13");
//             assert.equal(sharedObject.name, 13)
//         });
//
//         it('should return new name after calling the function more than one time ', function () {
//             sharedObject.changeName("Pesho");
//             sharedObject.changeName("Gosho");
//             assert.equal($('#name').val(), "Gosho");
//             assert.equal(sharedObject.name, "Gosho")
//         });
//
//         it('should return new name after calling the function more than one time ', function () {
//             sharedObject.changeName("Gosho");
//             sharedObject.changeName("");
//             assert.equal($('#name').val(), "Gosho");
//             assert.equal(sharedObject.name, "Gosho")
//         });
//
//     });
//
//     describe("changeIncome", function () {
//         it('should income be null', function () {
//            // assert.equal(sharedObject.name, null);
//             assert.equal(sharedObject.income, null);
//             //assert.equal($('#name').val(), '');
//             assert.equal($('#income').val(), '')
//         });
//         it('should do nothing for notNum or negative', function () {
//             assert.equal(sharedObject.changeIncome("4"));
//             assert.equal(sharedObject.changeIncome(-4));
//             assert.equal(sharedObject.changeIncome(0));
//         });
//
//         it('should change income for positive num', function () {
//             sharedObject.changeIncome(4);
//             assert.equal($('#income').val(), "4");
//             assert.equal(sharedObject.income, 4)
//         });
//         it('should do not change income after change 0', function () {
//             sharedObject.changeIncome(4);
//             sharedObject.changeIncome(0);
//             assert.equal($('#income').val(), "4");
//             assert.equal(sharedObject.income, 4)
//         });
//         it('should do not change income after change negative', function () {
//             sharedObject.changeIncome(4);
//             sharedObject.changeIncome(-3);
//             assert.equal($('#income').val(), "4");
//             assert.equal(sharedObject.income, 4)
//         });
//     });
//
//     describe("updateName", function () {
//         it('should do nothing with empty string', function () {
//             sharedObject.changeName("Pesho");
//             $('#name').val("");
//             sharedObject.updateName();
//             assert.equal($('#name').val(), "");
//             assert.equal(sharedObject.name, "Pesho");
//         });
//
//         it('should be set to the value of the name textbox ', function () {
//             $('#name').val("pesho");
//             sharedObject.updateName();
//             assert.equal(sharedObject.name, "pesho")
//         });
//
//     });
//
//     describe("updateIncome", function () {
//         it('should do nothing for NaN not a num or negative', function () {
//             sharedObject.changeIncome(7);
//
//             // $('#income').val();
//             // sharedObject.updateIncome();
//             // assert.equal(sharedObject.income, 7);
//
//             $('#income').val("string");
//             sharedObject.updateIncome();
//             assert.equal(sharedObject.income, 7);
//             expect($("#income").val()).to.equal("string");
//
//             $('#income').val(-3);
//             sharedObject.updateIncome();
//             assert.equal(sharedObject.income, 7);
//             expect($("#income").val()).to.equal("-3");
//
//             $('#income').val(3.6);
//             sharedObject.updateIncome();
//             assert.equal(sharedObject.income, 7);
//             expect($("#income").val()).to.equal("3.6");
//
//             $('#income').val(0);
//             sharedObject.updateIncome();
//             assert.equal(sharedObject.income, 7);
//             expect($("#income").val()).to.equal("0");
//         });
//
//         it('should be parsed to the new income', function () {
//             sharedObject.changeIncome(7);
//             $('#income').val(777);
//             sharedObject.updateIncome();
//             assert.equal(sharedObject.income, 777);
//             expect($("#income").val()).to.equal("777");
//         });
//     })
// });
//
//
//
