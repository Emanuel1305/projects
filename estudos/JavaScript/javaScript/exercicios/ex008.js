let prompt = require("prompt-sync")();

// Loops

var msg = "";

for (i = 1; i <= 100; i++) {
    msg += `${i}, `
}

console.log(msg);