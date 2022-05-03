// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const rollDie1 = Math.floor((Math.random() * 6) + 1);
const rollDie2 = Math.floor((Math.random() * 6) + 1);

if (rollDie1 > rollDie2) {
    console.log(`Il giocatore 1 ha fatto ${rollDie1}, il giocatore 2 ha fatto ${rollDie2}, il giocatore 1 ha vinto!`);
} else if (rollDie1 < rollDie2) {
    console.log(`Il giocatore 1 ha fatto ${rollDie1}, il giocatore 2 ha fatto ${rollDie2}, il giocatore 2 ha vinto!`);
} else if (rollDie1 === rollDie2) {
    console.log(`Il giocatore 1 ha fatto ${rollDie1}, il giocatore 2 ha fatto ${rollDie2}, pareggio!`);
}
