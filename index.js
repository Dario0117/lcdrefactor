const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Inserte el tamaño y los números (0,0 para terminar)> ');
rl.prompt();

rl.on('line', function (line) {
    if (line === "0,0") rl.close();
    rl.prompt();
}).on('close', function () {
    process.exit(0);
});