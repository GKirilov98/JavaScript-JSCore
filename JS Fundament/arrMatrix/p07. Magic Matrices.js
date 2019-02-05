function magicalMatrix(mat) {
    let isMagical = false;
    for (let i = 1; i < mat.length; i++) {
        if (mat[i].reduce((a, b) => a + b) === mat[i - 1].reduce((a, b) => a + b)) {
            isMagical = true;
        } else {
            return false;
        }
    }


    let rowSum = mat[0].reduce((a, b) => a + b);
    for (let col = 0; col < mat[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < mat.length; row++) {
            colSum += mat[row][col];
        }

        if (colSum === rowSum){
           isMagical = true
        }
        else {
            return false;
        }
    }

    console.log(isMagical);
}


magicalMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)