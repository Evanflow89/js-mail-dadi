// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.



const eMail = ["pino@tiscali.it", "lino@tiscali.it", "dino@tiscali.it", "gino@tiscali.it", "tino@tiscali.it"];

const userEmail = prompt("Inserisci il tuo indirizzo e-mail");


for (let i = 0; i < eMail.length; i++) {
    if (userEmail === eMail[i]) {
        console.log("Sei abilitato all'accesso!")
        break;
    } else console.log("Mi dispiace ma non sei abilitato all'accesso!")
    break;
}