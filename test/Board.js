const should = require('chai').should();
const Board = require('../src/Board');
const { cleanParams } = require('../src/Utils');

describe('Clase src/Board', function () {

    it('Debería imprimir todos los números con tamaño 2', function () {
        let input = "2,0123456789";
        let board = new Board(cleanParams(input));
        let result = [
            [null,"-" ,"-" ,null,null,null,null,null,null,null,null,"-" ,"-" ,null,null,null,"-" ,"-" ,null,null,null,null,null,null,null,null,"-" ,"-" ,null,null,null,"-" ,"-" ,null,null,null,"-" ,"-" ,null,null,null,"-" ,"-" ,null,null,null,"-" ,"-" ,null],
            ["|" ,null,null,"|" ,null,null,null,null,"|" ,null,null,null,null,"|" ,null,null,null,null,"|" ,null,"|" ,null,null,"|" ,null,"|" ,null,null,null,null,"|" ,null,null,null,null,null,null,null,"|" ,null,"|" ,null,null,"|" ,null,"|" ,null,null,"|" ],
            ["|" ,null,null,"|" ,null,null,null,null,"|" ,null,null,null,null,"|" ,null,null,null,null,"|" ,null,"|" ,null,null,"|" ,null,"|" ,null,null,null,null,"|" ,null,null,null,null,null,null,null,"|" ,null,"|" ,null,null,"|" ,null,"|" ,null,null,"|" ],
            [null,null,null,null,null,null,null,null,null,null,null,"-" ,"-" ,null,null,null,"-" ,"-" ,null,null,null,"-" ,"-" ,null,null,null,"-" ,"-" ,null,null,null,"-" ,"-" ,null,null,null,null,null,null,null,null,"-" ,"-" ,null,null,null,"-" ,"-" ,null],
            ["|" ,null,null,"|" ,null,null,null,null,"|" ,null,"|" ,null,null,null,null,null,null,null,"|" ,null,null,null,null,"|" ,null,null,null,null,"|" ,null,"|" ,null,null,"|" ,null,null,null,null,"|" ,null,"|" ,null,null,"|" ,null,null,null,null,"|" ],
            ["|" ,null,null,"|" ,null,null,null,null,"|" ,null,"|" ,null,null,null,null,null,null,null,"|" ,null,null,null,null,"|" ,null,null,null,null,"|" ,null,"|" ,null,null,"|" ,null,null,null,null,"|" ,null,"|" ,null,null,"|" ,null,null,null,null,"|" ],
            [null,"-" ,"-" ,null,null,null,null,null,null,null,null,"-" ,"-" ,null,null,null,"-" ,"-" ,null,null,null,null,null,null,null,null,"-" ,"-" ,null,null,null,"-" ,"-" ,null,null,null,null,null,null,null,null,"-" ,"-" ,null,null,null,"-" ,"-" ,null]
        ];
        board.generate();
        let generatedMatrix = board.board.get();
        generatedMatrix.should.deep.equal(result);
    });
});