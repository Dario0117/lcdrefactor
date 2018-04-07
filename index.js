const readline = require('readline');
const { cleanParams } = require('./src/Utils');
const Board = require('./src/Board');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Inserte el tamaño y los números (0,0 para terminar)> ');
rl.prompt();

rl.on('line', function (line) {
    if (line === "0,0") rl.close();
    try {
        let parsedInput = cleanParams(line);
        let board = new Board(parsedInput);
        board.print();
    }catch (e) {
        console.log(e.toString());
    }
    rl.prompt();
}).on('close', function () {
    process.exit(0);
});