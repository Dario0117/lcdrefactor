const Utils = require('./Utils');

class Digit{
    constructor(size){
        this.rows = 2 * size + 3;
        this.columns = 2 + size;
        this.horizontal = '-';
        this.vertical = '|';
    }

    generate(number){
        let matrix = Utils.matrix(this.rows, this.columns);
        switch(number){
            case 0:
                this.addTop(matrix);
                this.addBot(matrix);
                this.addLeftTop(matrix);
                this.addLeftBot(matrix);
                this.addRightTop(matrix);
                this.addRightBot(matrix);
                return matrix;
            case 1:
                this.addRightTop(matrix);
                this.addRightBot(matrix);
                return matrix;
            case 2:
                this.addTop(matrix);
                this.addBot(matrix);
                this.addMid(matrix);
                this.addLeftBot(matrix);
                this.addRightTop(matrix);
                return matrix;
            case 3:
                this.addTop(matrix);
                this.addBot(matrix);
                this.addMid(matrix);
                this.addRightBot(matrix);
                this.addRightTop(matrix);
                return matrix;
            case 4:
                this.addRightTop(matrix);
                this.addRightBot(matrix);
                this.addLeftTop(matrix);
                this.addMid(matrix);
                return matrix;
            case 5:
                this.addTop(matrix);
                this.addBot(matrix);
                this.addMid(matrix);
                this.addLeftTop(matrix);
                this.addRightBot(matrix);
                return matrix;
            case 6:
                this.addTop(matrix);
                this.addBot(matrix);
                this.addMid(matrix);
                this.addLeftTop(matrix);
                this.addLeftBot(matrix);
                this.addRightBot(matrix);
                return matrix;
            case 7:
                this.addTop(matrix);
                this.addRightTop(matrix);
                this.addRightBot(matrix);
                return matrix;
            case 8:
                this.addTop(matrix);
                this.addBot(matrix);
                this.addMid(matrix);
                this.addLeftTop(matrix);
                this.addLeftBot(matrix);
                this.addRightTop(matrix);
                this.addRightBot(matrix);
                return matrix;
            case 9:
                this.addRightTop(matrix);
                this.addRightBot(matrix);
                this.addLeftTop(matrix);
                this.addMid(matrix);
                this.addTop(matrix);
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