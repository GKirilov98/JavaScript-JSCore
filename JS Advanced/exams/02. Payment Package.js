// class PaymentPackage {
//     constructor(name, value) {
//         this.name = name;
//         this.value = value;
//         this.VAT = 20;      // Default value
//         this.active = true; // Default value
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     set name(newValue) {
//         if (typeof newValue !== 'string') {
//             throw new Error('Name must be a non-empty string');
//         }
//         if (newValue.length === 0) {
//             throw new Error('Name must be a non-empty string');
//         }
//         this._name = newValue;
//     }
//
//     get value() {
//         return this._value;
//     }
//
//     set value(newValue) {
//         if (typeof newValue !== 'number') {
//             throw new Error('Value must be a non-negative number');
//         }
//         if (newValue < 0) {
//             throw new Error('Value must be a non-negative number');
//         }
//         this._value = newValue;
//     }
//
//     get VAT() {
//         return this._VAT;
//     }
//
//     set VAT(newValue) {
//         if (typeof newValue !== 'number') {
//             throw new Error('VAT must be a non-negative number');
//         }
//         if (newValue < 0) {
//             throw new Error('VAT must be a non-negative number');
//         }
//         this._VAT = newValue;
//     }
//
//     get active() {
//         return this._active;
//     }
//
//     set active(newValue) {
//         if (typeof newValue !== 'boolean') {
//             throw new Error('Active status must be a boolean');
//         }
//         this._active = newValue;
//     }
//
//     toString() {
//         const output = [
//             `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
//             `- Value (excl. VAT): ${this.value}`,
//             `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
//         ];
//         return output.join('\n');
//     }
// }
//
// const assert = require("chai").assert;
//
// describe('PaymentPackage', function () {
//     let peyPack;
//     beforeEach(function () {
//         peyPack = new PaymentPackage("pesho", 12);
//     });
//     it('default value', function () {
//         assert.equal(peyPack.name, "pesho");
//         assert.equal(peyPack._name, "pesho");
//         assert.equal(peyPack.value, 12);
//         assert.equal(peyPack._value, 12);
//         assert.equal(peyPack.VAT, 20);
//         assert.equal(peyPack._VAT, 20);
//         assert.equal(peyPack.active, true);
//         assert.equal(peyPack._active, true);
//     });
//     it('should return toString', function () {
//         assert.equal(peyPack.toString(), "Package: pesho\n- Value (excl. VAT): 12\n- Value (VAT 20%): 14.399999999999999");
//         peyPack.active = false;
//         assert.equal(peyPack.toString(), "Package: pesho (inactive)\n- Value (excl. VAT): 12\n- Value (VAT 20%): 14.399999999999999");
//
//         let p = new PaymentPackage("0", 0);
//         p.active = false;
//         p.active = true;
//         p.active = false;
//         let expectedText = [
//             `Package: ${p.name}` + ' (inactive)',
//             `- Value (excl. VAT): ${p.value}`,
//             `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
//         ].join("\n");
//         let actualText = p.toString();
//
//         assert.equal(actualText, expectedText)
//     });
//     it('should throw Error', function () {
//         assert.throw(() => {return peyPack.name = 1234;}, "Name must be a non-empty string" );
//         assert.throw(() => {return peyPack.name = "";}, "Name must be a non-empty string" );
//         assert.throw(() => {return peyPack.value = "ha";}, "Value must be a non-negative number" );
//         assert.throw(() => {return peyPack.value = -3;}, "Value must be a non-negative number" );
//         assert.throw(() => {return peyPack.VAT = -3;}, "VAT must be a non-negative number" );
//         assert.throw(() => {return peyPack.VAT = "peshi";}, "VAT must be a non-negative number" );
//         assert.throw(() => {return peyPack.active = "peshi";}, "Active status must be a boolean" );
//         assert.throw(() => {return peyPack.active = null;}, "Active status must be a boolean" );
//         assert.throw(() => {return peyPack.active = 3;}, "Active status must be a boolean" );
//         assert.throw(() => {return peyPack.active = -3;}, "Active status must be a boolean" );
//     });
// });
//
