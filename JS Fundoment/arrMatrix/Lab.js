function sumFirstLast(arr) {
    return +arr[0] + +arr[arr.length - 1];
}

function evenPos(arr) {
    let evenArr = []
    for (let i = 0; i < arr.length; i += 2) {
        evenArr.push(arr[i]);
    }
    console.log(evenArr.join(" "));
}

function negPositiveNum(arr) {
    let result = arr.filter((x) => x < 0).reverse();
    let result2 = result.concat(arr.filter((x) => x >= 0));
    console.log(result2.join("\n"));
}

function lastKnumSeq(neededArrLenght, k) {
    let arr = [1];
    let sumOfNumSeq = 0;
    for (let i = 0; i < neededArrLenght - 1; i++) {
        let sum = 0;
        if (arr.length <= k) {
            sumOfNumSeq = arr.length;
        } else {
            sumOfNumSeq = k;
        }

        for (let l = arr.length - sumOfNumSeq; l < arr.length; l++) {
            sum += arr[l];
        }

        arr.push(sum);
    }
    console.log(arr.join(" "));
}

function processOddNum(arr) {
    let oddPos = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            oddPos.push(arr[i]);
        }
    }

    console.log(oddPos.map(function (x) {
        return x * 2;
    }).reverse().join(" "));
}

function smallestTwoNum(arr) {
    console.log(arr.sort((a, b) => a - b).slice(0, 2).join(" "));
}

function bigestNumInMatrix(mat) {
    let arrWithBiggNum = [];
    for (let i = 0; i < mat.length; i++) {
        arrWithBiggNum.push(mat[i].sort((a, b) => b - a).slice(0, 1));
    }
    console.log(arrWithBiggNum.sort((a, b) => b - a).slice(0, 1).join(""));
}

function sumMainSecondDiagonal(mat) {
    let mainSum = 0;
    let secondarySum = 0;
    for (let i = 0; i < mat.length; i++) {
        mainSum += mat[i][i];
        secondarySum += mat[i][mat.length - i -1];
    }
   console.log(`${mainSum} ${secondarySum}`);
}

function equalNeighbours(mat) {
    let counter = 0;
    for (let i = 1; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === mat[i-1][j]){
                counter++;
            }
        }
    }

    for (let i = 0; i < mat[0].length; i++) {
        if (mat[0][i] === mat[mat.length - 1][i]){
            counter++;
        }
    }
    console.log(counter);
}

equalNeighbours([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
    ]

);