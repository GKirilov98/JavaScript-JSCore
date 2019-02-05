// let assert = require("chai").assert;
// class HolidayPackage {
//     constructor(destination, season) {
//         this.vacationers = [];
//         this.destination = destination;
//         this.season = season;
//         this.insuranceIncluded = false; // Default value
//     }
//
//     addVacationer(vacationerName) {
//         if (typeof vacationerName !== "string" || vacationerName === ' ') {
//             throw new Error("Vacationer name must be a non-empty string");
//         }
//         if (vacationerName.split(" ").length !== 2) {
//             throw new Error("Name must consist of first name and last name");
//         }
//         this.vacationers.push(vacationerName);
//     }
//
//     showVacationers() {
//         if (this.vacationers.length > 0)
//             return "Vacationers:\n" + this.vacationers.join("\n");
//         else
//             return "No vacationers are added yet";
//     }
//
//     get insuranceIncluded() {
//         return this._insuranceIncluded;
//     }
//
//     set insuranceIncluded(insurance) {
//         if (typeof insurance !== 'boolean') {
//             throw new Error("Insurance status must be a boolean");
//         }
//         this._insuranceIncluded = insurance;
//     }
//
//     generateHolidayPackage() {
//         if (this.vacationers.length < 1) {
//             throw new Error("There must be at least 1 vacationer added");
//         }
//         let totalPrice = this.vacationers.length * 400;
//
//         if (this.season === "Summer" || this.season === "Winter") {
//             totalPrice += 200;
//         }
//
//         totalPrice += this.insuranceIncluded === true ? 100 : 0;
//
//         return "Holiday Package Generated\n" +
//             "Destination: " + this.destination + "\n" +
//             this.showVacationers() + "\n" +
//             "Price: " + totalPrice;
//     }
// }
//
//
// describe("HolidayPackage",function () {
//     let hp ;
//     beforeEach(function () {
//         hp = new HolidayPackage("Havai", "Winter");
//     });
//     it('should if invalid input', function () {
//         hp = new HolidayPackage("sa", 2);
//         assert.isNotString(hp.season);
//         hp = new HolidayPackage(2, "s");
//         assert.isNotString(hp.constructor)
//     });
//
//     describe('AddVacantioners', function () {
//         it('should trow if it not string or " "', function () {
//             assert.throws(function () {
//                 return hp.addVacationer(" ")
//                 }, "Vacationer name must be a non-empty string");
//             assert.throws(()=>hp.addVacationer(4), "Vacationer name must be a non-empty string");
//             assert.throw(()=> hp.addVacationer("pesho"), "Name must consist of first name and last name");
//             assert.throw(()=> hp.addVacationer("pesho pesho peshev"), "Name must consist of first name and last name")
//         });
//         it('should add if is valid', function () {
//             hp.addVacationer("pesho peshev");
//             assert.equal(hp.vacationers.length, 1);
//         });
//     });
//
//     describe('ShowVacantioners', function () {
//         it('should dont show', function () {
//             assert.equal(hp.showVacationers(),"No vacationers are added yet")
//         });
//         it('should vacantioners shows', function () {
//             hp.addVacationer("gosho goshov");
//             hp.addVacationer("pesho peshev");
//             assert.equal(hp.showVacationers(), "Vacationers:\ngosho goshov\npesho peshev")
//         });
//     });
//
//     describe('insuranceIncluded', function () {
//         it('should check set', function () {
//            assert.equal(hp.insuranceIncluded, false);
//            hp.insuranceIncluded = true;
//            assert.equal(hp.insuranceIncluded, true);
//            hp.insuranceIncluded = false;
//             assert.equal(hp.insuranceIncluded, false);
//             assert.throws(()=> {
//                 hp.insuranceIncluded = "strring";
//                 return hp.insuranceIncluded;
//             }, "Insurance status must be a boolean");
//             assert.throws(()=> {
//                 hp.insuranceIncluded = 3;
//                 return hp.insuranceIncluded;
//             }, "Insurance status must be a boolean");
//         });
//     });
//
//     describe('generateHolidayPackage', function () {
//         it('should throws if dont have vacantioners', function () {
//             assert.throws(()=> {hp.generateHolidayPackage()},
//                 "There must be at least 1 vacationer added"
//             );
//         });
//          it('should sm', function () {
//              hp.addVacationer("peshi peshov");
//              hp.addVacationer("pesho peshev");
//             assert.equal(hp.generateHolidayPackage(),
//                 "Holiday Package Generated\nDestination: Havai\nVacationers:\npeshi peshov\npesho peshev\nPrice: 1000")
//          });
//     });
// });
