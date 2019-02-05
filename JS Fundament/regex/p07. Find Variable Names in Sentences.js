function findVariableNames(text) {
    let matched = text.match(/(?<=_)[A-z]+/g);
    for (let i = 0; i < matched.length; i++) {
        if (matched[i].startsWith('_') || matched[i].endsWith("_")){
            matched[i] = null;
        }
    }
    console.log(matched.filter(e => e !== null).join(","));
}

findVariableNames('Calculate the __area of the _perfectRectangle object.');
findVariableNames('__invalidVariable _evenMoreInvalidVariable_ _validVariable');