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
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
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

}

module.exports = Digit;