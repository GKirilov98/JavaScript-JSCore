// const assert = require("chai").assert;
//
// function isOddOrEven(string) {
//     if (typeof(string) !== 'string') {
//         return undefined;
//     }
//     if (string.length % 2 === 0) {
//         return "even";
//     }
//
//     return "odd";
// }
//
// describe("isOddOrEven", function () {
//     it('should return undefined for not string', function () {
//         let value = 2;
//         let result = isOddOrEven(value);
//         assert.isNotString(result, "Is not a string")
//     });
//
//     it('should return odd for string.length -> 5', function () {
//         let value = 'hello';
//         let result = isOddOrEven(value);
//         assert.equal(result, "odd");
//     });
//
//     it('should return odd for string.length -> 4', function () {
//         let value = "help";
//         let result = isOddOrEven(value);
//         assert.equal(result, "even");
//     });
// });
