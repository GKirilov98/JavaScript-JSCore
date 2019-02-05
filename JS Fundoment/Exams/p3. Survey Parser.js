// function surveyParser(input) {
//     let regexSvg = /<svg>((.|\n)*?)<\/svg>/gm;
//     let regexCat = /<cat><text>((.|\n)*?)\[((.|\n)*?)]((.|\n)*?)<\/text><\/cat>\s*<cat>((.|\n)*?)<\/cat>/g;
//     let regexVal = /<g><val>([1-9]|10)<\/val>([0-9]+)<\/g>/gm;
//
//     if (!input.match(regexSvg)){
//         console.log("No survey found");
//         return;
//     } else if (!input.match(regexCat)){
//         console.log("Invalid format");
//         return;
//     }
//
//     let label = regexCat.exec(input)[3];
//     let ratingSum = 0;
//     let voteCount = 0;
//     while (true){
//         let tokens = regexVal.exec(input);
//         if (!tokens){
//             break;
//         }
//
//        ratingSum += (+tokens[1] * +tokens[2]);
//         voteCount += +tokens[2];
//     }
//
//     let avrRating = +(ratingSum / voteCount).toFixed(2);
//     console.log(`${label}: ${avrRating}`)
// }

surveyParser("<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>");