const prompt = require('prompt-sync')();

// Tabuada

console.log("\n----------TABUADA----------\n");

function tabuada(num) {
    console.log(`\n-----TABUADA DO ${num}-----\n`);
    for (i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

var resp = 0;

while (resp != 2) {
    var n = prompt("Deseja consultar a tabuada de qual número: ");
    tabuada(n);
    console.log("\nDeseja continuar:\n[1] Sim\n[2] Não");
    resp = parseInt(prompt(""));
}
