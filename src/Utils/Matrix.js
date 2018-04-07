class Matrix {
    constructor(rows, cols) {
        this.matrix = new Array(rows);
        for (let i = 0; i < rows; i++) {
            this.matrix[i] = new Array(cols).fill(null);
        }
        this.lastColumnUsed = 0;
    }

    fill(content){
        for(let row = 0; row < this.matrix.length; row++){
            this.matrix[row].fill(content);
        }
    }

    get() {
        return this.matrix;
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                process.stdout.write(
                    (this.matrix[i][j] == null) ? " " : ""+this.matrix[i][j]
                );
            }
            console.log("");
        }
    }

    canBePasted(m){
        if (!Array.isArray(m) && m.length < this.matrix.length)
            return false;

        let columnLength = m[0].length;

        for(let column of m){
            if (column.length !== columnLength)
                return false;
        }

        if(this.matrix[0].length < columnLength){
            return false;
        }

        return true;
    }

    pasteOnRight(m, spaces) {
        if(!this.canBePasted(m) || spaces < 0){
            throw new RangeError();
        }
        for (let row = 0; row < m.length; row++) {
            for (let col = 0; col < m[row].length; col++) {
                this.matrix[row][col + this.lastColumnUsed] = m[row][col];
            }
        }
        this.lastColumnUsed += m[0].length + spaces;
    }
}

module.exports = Matrix;