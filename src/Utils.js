exports.cleanParams = (input) => {
    let regexp = /\b([2-9]|10?),\d+/;
    if(input.match(regexp)[0] !== input){
        throw new Error('Entrada inválida');
    }
    let [size, numberList] = input.split(',');
    let numbers = numberList.split('')
                            .map((number)=> +number);
    size = +size;
    return { size, numbers };
};
