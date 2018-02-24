module.exports = function solveSudoku(matrix) {
    var arr = [];
    var arr2 = [];
    var numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var blockI;
    var blockJ;
    
    for (var i = 0; i < 9; i++) {
     for (var j = 0; j < 9; j++) {
        if (matrix[i][j] === 0) {
            for (var k = 0; k < 9; k++) {
                blockI = Math.trunc(i / 3) * 3;
                blockJ = Math.trunc(j / 3) * 3;
                if(matrix[(blockI + k) % 3][blockJ + Math.trunc(k / 3)] != 0) arr.push(matrix[blockI + k % 3][blockJ + Math.trunc(k / 3)]);
                if(matrix[i][k] != 0 ) arr.push(matrix[i][k]); 
                if(matrix[k][j] != 0) arr.push(matrix[k][j]); 
            }
            arr2= numb.filter(function(item){
                return arr.indexOf(item) < 0;
            })
            for (var l = 0; l < arr2.length; l++) {
                matrix[i][j] = arr2[l];
                if (solveSudoku(matrix)){
                 return solveSudoku(matrix);
                }
            }
                 matrix[i][j] = 0;
                return false;
        }
    }
}
        return matrix;
}
