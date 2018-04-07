const Digit = require('./Digit');
const { Matrix, printMatrix } = require('./Utils');

class Board{
    constructor({size, numbers}){
        this.numbers = numbers;
        this.lcd = new Digit(size);
        let col = (this.lcd.columns * this.numbers.length) + (this.numbers.length - 1);
        this.board = new Matrix(this.lcd.rows, col);
        this.spaces_between_numbers = 1;
    }

    generate(){
        let actual_column = 0;
        for(let i = 0; i < this.numbers.length; i++){
            let tmp_number = this.lcd.generate(this.numbers[i]);
            for(let row = 0; row < this.lcd.rows ; row++){
                for(let col = 0; col < tmp_number[row].length; col++){
                    this.board[row][col + actual_column] = tmp_number[row][col];
                }
            }
            actual_column += tmp_number[0].length + this.spaces_between_numbers;
        }
    }

    print(){
        this.generate();
        printMatrix(this.board);
    }
}

module.exports = Board;