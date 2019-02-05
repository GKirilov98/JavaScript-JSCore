// let expect = require("chai").expect;
//
// class BookCollection {
//     get room() {
//         return this._room;
//     }
//
//     set room(value) {
//         if (value === "livingRoom" || value === "bedRoom" || value === "closet") {
//             this._room = value;
//         } else {
//             throw new Error(`Cannot have book shelf in ${value}`);
//         }
//     }
//
//     constructor(shelfGenre, room, shelfCapacity) {
//         this.shelf = [];
//         this.shelfGenre = shelfGenre;
//         this.room = room;
//         this.shelfCapacity = shelfCapacity;
//         // this.shelfCondition =0;
//     }
//
//     addBook(bookName, bookAuthor, genre) {
//         if (this.shelf.length === this.shelfCapacity) {
//             this.shelf.shift();
//         }
//         let newBook = {
//             bookName: bookName,
//             bookAuthor: bookAuthor,
//             genre: genre
//         };
//         this.shelf.push(newBook);
//         this.shelf.sort((a, b) => {
//             return a.bookAuthor.localeCompare(b.bookAuthor);
//         });
//         return this;
//     }
//
//     throwAwayBook(bookName) {
//         let index = -1;
//         for (let i = 0; i < this.shelf; i++) {
//             if (this.shelf[i].bookName === bookName) {
//                 index = i;
//                 break;
//             }
//         }
//         this.shelf.splice(index, 1);
//     }
//
//     showBooks(genre) {
//         let output = "";
//         let wantedBooks = this.shelf.filter((b) => b.genre === genre);
//         if (wantedBooks.length > 0) {
//             output += `Results for search \"${genre}\":`;
//             wantedBooks.forEach((book) => {
//                 output += `
// \uD83D\uDCD6 ${book.bookAuthor} - \"${book.bookName}\"`;
//             });
//         }
//         return output;
//     }
//
//     toString() {
//         if (this.shelf.length === 0) {
//             return "It's an empty shelf";
//         } else {
//             let genre = this.shelfGenre;
//             let room = this.room;
//             let result = `"${genre}" shelf in ${room} contains:`;
//             let book = this.shelf;
//
//             book.forEach((x) => {
//                 let name = x.bookName;
//                 let author = x.bookAuthor;
//                 result += `
// \uD83D\uDCD6 "${name}" - ${author}`;
//             });
//             return result;
//         }
//     }
// }
//
// // let  classInstance = new BookCollection('Programming', 'livingRoom', 5);
// // classInstance.addBook("Introduction to Programming with C#", "Svetlin Nakov");
// // classInstance.addBook("Introduction to Programming with Java", "Svetlin Nakov");
// // classInstance.addBook("Programming for .NET Framework", "Svetlin Nakov");
// // console.log(classInstance.toString());
// // console.log();
// // console.log('"Programming" shelf in livingRoom contains:\n\uD83D\uDCD6 "Introduction to Programming with C#" - Svetlin Nakov\n\uD83D\uDCD6 "Introduction to Programming with Java" - Svetlin Nakov\n\uD83D\uDCD6 "Programming for .NET Framework" - Svetlin Nakov');
//
//
// describe('Boook', function () {
//     it('should ', function () {
//         let classInstance = new BookCollection('Programming', 'livingRoom', 5);
//         classInstance.addBook("Introduction to Programming with C#", "Svetlin Nakov");
//         classInstance.addBook("Introduction to Programming with Java", "Svetlin Nakov");
//         classInstance.addBook("Programming for .NET Framework", "Svetlin Nakov");
//
//         expect(classInstance.toString()).to.contains('"Programming" shelf in livingRoom contains:\n\uD83D\uDCD6 "Introduction to Programming with C#" - Svetlin Nakov\n\uD83D\uDCD6 "Introduction to Programming with Java" - Svetlin Nakov\n\uD83D\uDCD6 "Programming for .NET Framework" - Svetlin Nakov');
//     });
// });
//
//
// // let bedRoom = new BookCollection('Mixed', 'bedRoom', 5)
// //     .addBook("John Adams", "David McCullough", "history")
// //     .addBook("The Guns of August", "Cuentos para pensar", "history")
// //     .addBook("Atlas of Remote Islands", "Judith Schalansky")
// //     .addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
// // //  console.log(bedRoom.toString());
// //
// // console.log("It's an empty shelf");
//
//
