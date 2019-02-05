// function descriptCountry(arr){
//     let regexCountry = /\b[A-Z][a-z]+[A-Z]\b/gm;
//     let text = arr[3];
//     let startIndex = arr[0];
//     let endIndex = arr[1];
//     let replacer = arr[2];
//     let matched = text.match(regexCountry);
//     let descriptedCountry = matched[0].split("");
//     descriptedCountry.splice(startIndex, (endIndex - startIndex) +1, replacer);
//     descriptedCountry[descriptedCountry.length - 1] = descriptedCountry[descriptedCountry.length - 1].toLowerCase();
//     descriptedCountry = descriptedCountry.join("");
//     let numRegex = /[0-9]{3}[.0-9]*/gm;
//     let numbersChar = text.match(numRegex).map(x => x =String.fromCharCode(Math.ceil(x)));
//     numbersChar[0] = numbersChar[0].toUpperCase();
//     console.log(`${descriptedCountry} => ${numbersChar.join("")}`)
// }
//
// descriptCountry(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
