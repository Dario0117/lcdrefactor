const Digit = require('./Digit');
const Matrix = require('./Utils/Matrix');

class Board{
    constructor({size, numbers}){
        this.numbers = numbers;
        this.lcdDigit = new Digit(size);
        let col = (this.lcdDigit.columns * this.numbers.length) + (this.numbers.length - 1);
        this.board = new Matrix(this.lcdDigit.rows, col);
        this.spacesBetweenNumbers = 1;
    }

    generate(){
        for(let i = 0; i < this.numbers.length; i++){
            let tmpDigit = this.lcdDigit.generateMatrix(this.numbers[i]).get();
            this.board.pasteOnRight(tmpDigit, this.spacesBetweenNumbers);
        }
    }

    print(){
        this.generate();
        this.board.print();
    }
}

module.exports = Board;