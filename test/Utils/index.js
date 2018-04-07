const should = require('chai').should();
const { cleanParams, CONSTANTS } = require('../../src/Utils/index');

describe('Módulo de utilidades \'src/Utils\'', function () {

    describe('Función: cleanParams', function () {

        it('Debería retornar los dos parámetros', function () {
            for (let size = 1; size <= 10; size++) {
                let params = size + ",123";
                let cleanedParams = cleanParams(params);
                cleanedParams.should.have.property('size')
                    .be.eq(size);
                cleanedParams.should.have.property('numbers')
                    .deep.equal([1,2,3]);
            }
        });

        describe('Introducción de cantidad errónea de parámetros', function () {

            it('Debería dar error al pasarle MENOS de 2 parámetros', function () {

                (function (){
                    cleanParams("1");
                }).should.throw(TypeError);

                (function (){
                    cleanParams(",1");
                }).should.throw(TypeError);

                (function (){
                    cleanParams("");
                }).should.throw(TypeError);
            });

            it('Debería dar error al pasarle MAS de 2 parámetros', function () {

                (function (){
                    cleanParams("1,23,2");
                }).should.throw(TypeError);

                (function (){
                    cleanParams("1,23,2,45");
                }).should.throw(TypeError);
            });
        });

        describe('Introducción de parámetros no soportados', function () {

            it('Debería dar error si le paso un caracter como size', function () {
                (function (){
                    cleanParams("a,1231");
                }).should.throw(TypeError);
            });

            it('Debería dar error si le paso un caracter en los números a imprimir', function () {
                (function (){
                    cleanParams("10,a");
                }).should.throw(TypeError);
            });

            it('Debería dar error si le paso un caracter como parámetro', function () {
                (function (){
                    cleanParams("a");
                }).should.throw(TypeError);
                (function (){
                    cleanParams("asd");
                }).should.throw(TypeError);
            });

            it('Debería dar error si le paso un 0 en el size', function () {
                (function (){
                    cleanParams("0,1231");
                }).should.throw(TypeError);
            });
        });
    });
});