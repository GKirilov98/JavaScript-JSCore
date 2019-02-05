function diagonalAttack(matrixString) {
    let matrix = matrixString.map((a,x) => matrixString[x].split(" "));
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal += +matrix[i][i];
        secondaryDiagonal += +matrix[i][matrix[i].length - i - 1];
    }

    if (mainDiagonal === secondaryDiagonal) {
        for (let i = 0; i < matrix.length; i++) {
            for (let col = 0; col < matrix[0].length; col++) {
                if (i !== col && col !== matrix[i].length - i - 1){
                    matrix[i][col] = mainDiagonal;
                }
            }
        }
    }

    for (let matrixKey in matrix) {
        console.log(matrix[matrixKey].join(" "));
    }
}

diagonalAttack(['5 3 12 3 1',
    '13 4 23 2 5',
    '1 12 3 21 10',
    '13 4 35 2 2',
    '5 22 3 11 1']
);