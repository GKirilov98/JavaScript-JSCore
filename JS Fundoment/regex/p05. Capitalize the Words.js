function capitWords(text) {
    let lowerCaseMatrix = text.toLowerCase().split("");
   lowerCaseMatrix[0] = lowerCaseMatrix[0].toUpperCase();
    for (let i = 1; i < lowerCaseMatrix.length; i++) {
       if (lowerCaseMatrix[i - 1] === " "){
          lowerCaseMatrix[i] = lowerCaseMatrix[i].toUpperCase();
       }
    }

    console.log(lowerCaseMatrix.join(""));
}

capitWords('Was that Easy? tRY thIs onE for SiZe!');