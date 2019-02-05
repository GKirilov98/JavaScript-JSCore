// class SubscriptionCard {
//     constructor(firstName, lastName, SSN) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//         this._SSN = SSN;
//         this._subscriptions = [];
//         this._blocked = false;
//     }
//
//     get firstName() {
//         return this._firstName;
//     }
//
//     get lastName() {
//         return this._lastName;
//     }
//
//     get SSN() {
//         return this._SSN;
//     }
//
//     get isBlocked() {
//         return this._blocked;
//     }
//
//     addSubscription(line, startDate, endDate) {
//         this._subscriptions.push({
//             line,
//             startDate,
//             endDate
//         });
//     }
//
//     isValid(line, date) {
//         if (this.isBlocked) return false;
//         return this._subscriptions.filter(s => s.line === line || s.line === '*')
//             .filter(s => {
//                 return s.startDate <= date &&
//                     s.endDate >= date;
//             }).length > 0;
//     }
//
//     block() {
//         this._blocked = true;
//     }
//
//     unblock() {
//         this._blocked = false;
//     }
// }
//
// // const   infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// // infoCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
// // let arr = infoCard._subscriptions[0];
// // console.log(arr);
//
// const assert = require("chai").assert;
//
// // describe('SubscriptionCard', function () {
// //     describe('constructor', function () {
// //         it('should fill properties constructor', function () {
// //             const infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //             assert.equal(infoCard._firstName, 'Pesho');
// //             assert.equal(infoCard._lastName, 'Petrov');
// //             assert.equal(infoCard._SSN, '00000000');
// //             assert.equal(infoCard.firstName, 'Pesho');
// //             assert.equal(infoCard.lastName, 'Petrov');
// //             assert.equal(infoCard.SSN, '00000000');
// //             assert.equal(infoCard._blocked, false);
// //             assert.equal(infoCard._subscriptions.length, 0);
// //         });
// //     });
// //     describe('isBlocked', function () {
// //         it('should return bool ', function () {
// //             const infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //             assert.equal(infoCard.isBlocked, false);
// //         });
// //     });
// //     describe('addSubscription', function () {
// //         it('should adds an entry', function () {
// //             const infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //             infoCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
// //             assert.equal(infoCard._subscriptions.length, 1);
// //             assert.equal(infoCard._subscriptions[0].line, '120');
// //             assert.notStrictEqual(infoCard._subscriptions[0].startDate, new Date('2018-04-22'));
// //             assert.notStrictEqual(infoCard._subscriptions[0].endDate, new Date('2018-05-21'));
// //             infoCard.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
// //             assert.equal(infoCard._subscriptions.length, 2);
// //             assert.equal(infoCard._subscriptions[1].line, '*');
// //             assert.notStrictEqual(infoCard._subscriptions[1].startDate, new Date('2018-05-25'));
// //             assert.notStrictEqual(infoCard._subscriptions[1].endDate, new Date('2018-06-24'));
// //
// //         });
// //         it('should block card', function () {
// //             const infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //             infoCard.block();
// //             assert.equal(infoCard.isBlocked, true);
// //         });
// //
// //         it('should unblock', function () {
// //             const infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //             infoCard.block();
// //             infoCard.unblock();
// //             assert.equal(infoCard.isBlocked, false);
// //         });
// //     });
// //     describe('isvalid', function () {
// //         it('EmptyCard ', function () {
// //             const  infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //             assert.equal(infoCard.isValid('120', new Date('2018-04-22')), false)
// //         });
// //         it('should ', function () {
// //             const  infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //             infoCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
// //             assert.equal(infoCard.isValid('120', new Date('2018-04-21')), false)
// //         });
// //         it('should ', function () {
// //             const  infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //             infoCard.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
// //             assert.equal(infoCard.isValid('120', new Date('2018-04-21')), false)
// //         });
// //
// //         it('should ', function () {
// //             const  infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //             infoCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
// //             assert.equal(infoCard.isValid('120', new Date('2018-04-24')), true)
// //         });
// //
// //         it('should ', function () {
// //             const  infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //             infoCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
// //             assert.equal(infoCard.isValid('120', new Date('2018-05-22')), false)
// //         });
// //         it('should ', function () {
// //             const  infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //             infoCard.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
// //             assert.equal(infoCard.isValid('120', new Date('2018-05-22')), false)
// //         });
// //
// //         it('should ', function () {
// //             const  infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //             infoCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
// //             assert.equal(infoCard.isValid('120', new Date('2018-04-22')), true)
// //         });
// //
// //         it('should ', function () {
// //             const  infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //             infoCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
// //             assert.equal(infoCard.isValid('120', new Date('2018-05-21')), true)
// //         });
// //
// //         it('should ', function () {
// //             const  infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //             infoCard.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
// //             assert.equal(infoCard.isValid('121', new Date('2018-04-25')), true)
// //         });
// //
// //         it('should ', function () {
// //             const  infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //             infoCard.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
// //             infoCard.block();
// //             assert.equal(infoCard.isValid('121', new Date('2018-04-25')), false)
// //         });
// //     });
// //     it('should dousnt change', function () {
// //         const infoCard = new SubscriptionCard('Pesho', 'Petrov', '00000000');
// //         infoCard.firstName = "gosho";
// //         assert.equal(infoCard.firstName, "Pesho");
// //         infoCard.lastName = "gosho";
// //         assert.equal(infoCard.lastName, "Petrov");
// //         infoCard.SSN = "gosho";
// //         assert.equal(infoCard.SSN, "00000000");
// //     });
// // });
