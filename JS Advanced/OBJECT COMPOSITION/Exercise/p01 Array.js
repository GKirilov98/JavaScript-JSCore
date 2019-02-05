// (function () {
//     Array.prototype.last = function last() {
//         return this[this.length -1];
//     };
//      Array.prototype.skip = function (n) {
//          return this.slice(n);
//      };
//      Array.prototype.take = function (n) {
//          return this.slice(0, n);
//
//      };
//      Array.prototype.sum = function () {
//          return this.reduce((a, c) => a + c);
//      };
//      Array.prototype.average = function () {
//          return ((this.reduce((a, c) => a + c)) / this.length);
//      }
// })();

let arr = [1, 2, 3, 6, 5, 2];
console.log(arr.take(4));




