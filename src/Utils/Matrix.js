class Matrix {
    constructor(rows, cols) {
        this.matrix = new Array(rows);
        for (let i = 0; i < rows; i++) {
            this.matrix[i] = new Array(cols);
        }
        this.lastColumnUsed = 0;
    }

    get() {
        return this.matrix;
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                process.stdout.write(
                    (this.matrix[i][j] == null) ? " " : this.matrix[i][j]
                );
            }
            console.log("");
        }
    }

    pasteOnRight(m, spaces) {
        for (let row = 0; row < m.length; row++) {
            for (let col = 0; col < m[row].length; col++) {
                this.matrix[row][col + this.lastColumnUsed] = m[row][col];
            }
        }
        this.lastColumnUsed += m[0].length + spaces;
    }
}

module.exports = Matrix;