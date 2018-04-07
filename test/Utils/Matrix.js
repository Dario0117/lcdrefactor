const should = require('chai').should();
const Matrix = require('../../src/Utils/Matrix');

describe('Clase src/Utils/Matrix', function () {

    describe('Método pasteOnRight', function () {

        it('Debería pegar una matriz dentro de otra a la derecha', function () {
            let target = new Matrix(4,4);
            target.fill(2);

            let source = [
                [1,1,1],
                [1,1,1],
                [1,1,1],
                [1,1,1],
            ];

            let result = [
                [1,1,1,2],
                [1,1,1,2],
                [1,1,1,2],
                [1,1,1,2],
            ];

            let spacesBetween = 0;

            target.pasteOnRight(source, spacesBetween);

            target.get().should.deep.equal(result);
        });

        it('Debería dar error al tratar de pegar matrices de distintos tamaños', function () {
            (function () {
                let target = new Matrix(4, 2);

                target.fill(2);

                let source = [
                    [1, 1, 1],
                    [1, 1, 1],
                    [1, 1, 1],
                    [1, 1, 1],
                ];

                let spacesBetween = 0;

                target.pasteOnRight(source, spacesBetween);
            }).should.throw(RangeError);
        });

        it('Debería dar error al tratar de poner espacios negativos entre la matriz', function () {
            (function () {
                let target = new Matrix(4,4);
                target.fill(2);

                let source = [
                    [1,1,1],
                    [1,1,1],
                    [1,1,1],
                    [1,1,1],
                ];

                let result = [
                    [1,1,1,2],
                    [1,1,1,2],
                    [1,1,1,2],
                    [1,1,1,2],
                ];

                let spacesBetween = -1;

                target.pasteOnRight(source, spacesBetween);

                target.get().should.deep.equal(result);
            }).should.throw(RangeError);
        });
    });
});