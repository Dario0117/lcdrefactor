const Matrix = require('./Utils/Matrix');

class Digit{
    constructor(size){
        this.rows = 2 * size + 3;
        this.columns = 2 + size;
        this.horizontal = '-';
        this.vertical = '|';
    }

    generateMatrix(number){
        let matrix = new Matrix(this.rows, this.columns);
        let m = matrix.get();
        switch(number){
            case 0:
                this.addTop(m);
                this.addBot(m);
                this.addLeftTop(m);
                this.addLeftBot(m);
                this.addRightTop(m);
                this.addRightBot(m);
                return matrix;
            case 1:
                this.addRightTop(m);
                this.addRightBot(m);
                return matrix;
            case 2:
                this.addTop(m);
                this.addBot(m);
                this.addMid(m);
                this.addLeftBot(m);
                this.addRightTop(m);
                return matrix;
            case 3:
                this.addTop(m);
                this.addBot(m);
                this.addMid(m);
                this.addRightBot(m);
                this.addRightTop(m);
                return matrix;
            case 4:
                this.addRightTop(m);
                this.addRightBot(m);
                this.addLeftTop(m);
                this.addMid(m);
                return matrix;
            case 5:
                this.addTop(m);
                this.addBot(m);
                this.addMid(m);
                this.addLeftTop(m);
                this.addRightBot(m);
                return matrix;
            case 6:
                this.addTop(m);
                this.addBot(m);
                this.addMid(m);
                this.addLeftTop(m);
                this.addLeftBot(m);
                this.addRightBot(m);
                return matrix;
            case 7:
                this.addTop(m);
                this.addRightTop(m);
                this.addRightBot(m);
                return matrix;
            case 8:
                this.addTop(m);
                this.addBot(m);
                this.addMid(m);
                this.addLeftTop(m);
                this.addLeftBot(m);
                this.addRightTop(m);
                this.addRightBot(m);
                return matrix;
            case 9:
                this.addRightTop(m);
                this.addRightBot(m);
                this.addLeftTop(m);
                this.addMid(m);
                this.addTop(m);
                return matrix;
        }
    }

    addTop(matrix){
        for(let column = 1 ; column < this.columns - 1 ; column++){
            matrix[0][column] = this.horizontal;
        }
    }

    addBot(matrix){
        for(let column = 1 ; column < this.columns - 1 ; column++){
            matrix[this.rows - 1][column] = this.horizontal;
        }
    }

    addLeftTop(matrix){
        for(let row = 1 ; row < Math.floor(this.rows / 2); row++){
            matrix[row][0] = this.vertical;
        }
    }

    addLeftBot(matrix){
        for(let row = Math.floor(this.rows / 2) + 1 ; row < this.rows - 1; row++){
            matrix[row][0] = this.vertical;
        }
    }

    addRightTop(matrix){
        for(let row = 1 ; row < Math.floor(this.rows / 2); row++){
            matrix[row][this.columns - 1] = this.vertical;
        }
    }

    addRightBot(matrix){
        for(let row = Math.floor(this.rows / 2) + 1 ; row < this.rows - 1; row++){
            matrix[row][this.columns - 1] = this.vertical;
        }
    }

    addMid(matrix){
        for(let column = 1 ; column < this.columns - 1 ; column++){
            matrix[Math.floor(this.rows / 2)][column] = this.horizontal;
        }
    }

}

module.exports = Digit;