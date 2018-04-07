function cleanParams (input){
    let regexp = /\b([2-9]|10?),\d+/;
    let matches = Object.assign([], input.match(regexp));
    if(matches[0] !== input){
        throw new TypeError('Entrada inválida');
    }
    let [size, numberList] = input.split(',');
    let numbers = numberList.split('')
                            .map((number)=> +number);
    size = +size;
    return { size, numbers };
}

module.exports = {
    cleanParams
};