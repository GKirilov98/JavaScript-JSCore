// class Vacationer {
//     get fullName() {
//         return this._fullName;
//     }
//
//     set fullName(value) {
//         if (value.length !== 3) {
//             throw new Error("Name must include first name, middle name and last name");
//         }
//
//         let pattern = /^[A-Z][a-z]+$/gm;
//         value.map((x) => {
//             let bool = x.match(pattern);
//             if (!bool){
//                 throw new Error("Invalid full name");
//             }
//         });
//
//         this._fullName = {
//             firstName: value[0],
//             middleName: value[1],
//             lastName: value[2]
//         };
//     }
//
//     constructor(fullName, creditCard = []){
//         this.fullName = fullName;
//         this.idNumber = this.generateIDNumber();
//         this.creditCard = {
//             cardNumber: creditCard[0] || 1111,
//             expirationDate: creditCard[1] || "",
//             securityNumber: creditCard[2] || 111
//         };
//         if (typeof this.creditCard.cardNumber !== "number" ||
//         typeof  this.creditCard.expirationDate !== "string" ||
//         typeof this.creditCard.securityNumber !== "number"){
//             throw new TypeError();
//         }
//         this.wishList = [];
//     }
//
//     generateIDNumber(){
//         let letterFirstName = this._fullName.firstName.charCodeAt(0);
//         let result = (231 * letterFirstName + 139 * this._fullName.middleName.length);
//         let lastLastName = this._fullName.lastName[this._fullName.lastName.length -1];
//         if (lastLastName === "a" || lastLastName === "e" || lastLastName === "o" ||
//             lastLastName === "i" || lastLastName === "u"){
//             result += "8";
//         } else {
//             result += "7";
//         }
//
//         return result;
//     }
//
//     addCreditCardInfo(input){
//         if  (input.length  < 3){
//             throw new Error("Missing credit card information");
//         }
//
//         if (typeof input[0] !== "number" || typeof input[2] !== "number"){
//             throw new Error("Invalid credit card details");
//         }
//
//         this.creditCard.cardNumber = input[0];
//         this.creditCard.expirationDate = input[1];
//         this.creditCard.securityNumber = input[2];
//     }
//
//     addDestinationToWishList(destination){
//
//         if (this.wishList.includes(destination)) {
//             throw new Error("Destination already exists in wishlist");
//         }
//         this.wishList.push(destination);
//         this.wishList.sort((a, b) => {
//             return   a.length > b.length;
//         });
//     }
//     getVacationerInfo(){
//         let wishList;
//         if(this.wishList.length === 0){
//             wishList = "empty"
//         } else {
//             wishList = this.wishList.join(", ");
//         }
//
//         let resuld = `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}
// ID Number: ${this.idNumber}
// Wishlist:
// ${wishList}
// Credit Card:
// Card Number: ${this.creditCard.cardNumber}
// Expiration Date: ${this.creditCard.expirationDate}
// Security Number: ${this.creditCard.securityNumber}`;
//         return resuld;
//     }
// }
//
// const expect = require("chai").expect;
//
// describe('va', function () {
//     it('should ', function () {
//         classInstance1 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], [123456789, "10/01/2018", 777]);
//         expect(classInstance1.getVacationerInfo()).to.contains('', 'getVacationerInfo returns an incorrect message');
//     });
// });