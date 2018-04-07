const CONSTANTS = {
    ERROR_INVALID_INPUT: 'Entrada inválida'
};

function cleanParams (input){
    let regexp = /\b([2-9]|10?),\d+/;
    let matches = Object.assign([], input.match(regexp));
    if(matches[0] !== input){
        throw new Error(CONSTANTS.ERROR_INVALID_INPUT);
    }
    let [size, numberList] = input.split(',');
    let numbers = numberList.split('')
                            .map((number)=> +number);
    size = +size;
    return { size, numbers };
}

function matrix (rows, cols){
    let matrix = new Array(rows);
    for(let i = 0; i < rows; i++){
        matrix[i] = new Array(cols);
    }
    return matrix;
}

function printMatrix (m){
    for(let i = 0; i < m.length ; i++){
        for(let j = 0; j < m[i].length ; j++){
            process.stdout.write(
                (m[i][j] == null) ? " " : m[i][j]
            );
        }
        console.log("");
    }
}

module.exports = {
    CONSTANTS,
    printMatrix,
    cleanParams,
    matrix
};