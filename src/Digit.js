const Utils = require('./Utils');

class Digit{
    constructor(size){
        this.size = size;
        this.rows = 2 * size + 3;
        this.columns = 2 + size;
        this.horizontal = '-';
        this.vertical = '|';
    }

    generate(number){
        switch(number){
            case 0:
                return this.zero();
            case 1:
                return this.one();
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

    zero(){
        let matrix = Utils.matrix(this.rows, this.columns);
        for(let column = 1 ; column < this.columns - 1 ; column++){
            matrix[0][column] = this.horizontal;
            matrix[this.rows - 1][column] = this.horizontal;
        }
        for(let row = 1 ; row < this.rows - 1; row++){
            matrix[row][0] = this.vertical;
            matrix[row][this.columns - 1] = this.vertical;
        }
        return matrix;
    }

    one(){
        let matrix = Utils.matrix(this.rows, this.columns);
        for(let row = 1; row < this.rows - 1; row++){
            matrix[row][this.columns - 1] = this.vertical;
        }
        if(this.size % 2 === 0){
            matrix[Math.floor(this.rows / 2)][this.columns - 1] = null;
        }
        return matrix;
    }

}

module.exports = Digit;