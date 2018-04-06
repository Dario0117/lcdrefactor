const should = require('chai').should();
const Utils = require('../src/Utils');

describe('Módulo de utilidades \'src/Utils\'', function () {

    describe('Función: cleanParams', function () {

        it('Debería retornar los dos parámetros', function () {
            for (let i = 1; i <= 10; i++) {
                let params = i + ",123";
                let cleanedParams = Utils.cleanParams(params);
                cleanedParams.should.have.property('size')
                    .be.eq(i);
                cleanedParams.should.have.property('numbers')
                    .deep.equal([1,2,3]);
            }
        });

        describe('Introducción de cantidad errónea de parámetros', function () {

            it('Debería dar error al pasarle MENOS de 2 parámetros', function () {

                (function (){
                    Utils.cleanParams("1")
                }).should.throw(Error, Utils.CONSTANTS.ERROR_INVALID_INPUT);

                (function (){
                    Utils.cleanParams(",1")
                }).should.throw(Error, Utils.CONSTANTS.ERROR_INVALID_INPUT);

                (function (){
                    Utils.cleanParams("")
                }).should.throw(Error, Utils.CONSTANTS.ERROR_INVALID_INPUT);
            });

            it('Debería dar error al pasarle MAS de 2 parámetros', function () {

                (function (){
                    Utils.cleanParams("1,23,2");
                }).should.throw(Error, Utils.CONSTANTS.ERROR_INVALID_INPUT);

                (function (){
                    Utils.cleanParams("1,23,2,45");
                }).should.throw(Error, Utils.CONSTANTS.ERROR_INVALID_INPUT);
            });
        });

        describe('Introducción de parámetros no soportados', function () {

            it('Debería dar error si le paso un caracter como size', function () {
                (function (){
                    Utils.cleanParams("a,1231");
                }).should.to.throw(Error, Utils.CONSTANTS.ERROR_INVALID_INPUT);
            });

            it('Debería dar error si le paso un caracter en los números a imprimir', function () {
                (function (){
                    Utils.cleanParams("10,a");
                }).should.to.throw(Error, Utils.CONSTANTS.ERROR_INVALID_INPUT);
            });

            it('Debería dar error si le paso un caracter como parámetro', function () {
                (function (){
                    Utils.cleanParams("a");
                }).should.to.throw(Error, Utils.CONSTANTS.ERROR_INVALID_INPUT);
                (function (){
                    Utils.cleanParams("asd");
                }).should.to.throw(Error, Utils.CONSTANTS.ERROR_INVALID_INPUT);
            });

            it('Debería dar error si le paso un 0 en el size', function () {
                (function (){
                    Utils.cleanParams("0,1231");
                }).should.to.throw(Error, Utils.CONSTANTS.ERROR_INVALID_INPUT);
            });
        });
    });
});