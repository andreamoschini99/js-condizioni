// Traccia 01 · Il badge
// La consegna è nel README, alla voce "01 · Il badge".

/*
  STEPS
  1 -
  2 -
  3 -
  4 -
*/

// # Fase di preparazione
const anniDaAggiungere = 10;

// # Fase di raccolta dati
const nomeUtente = "Andrea";
const etaUtente = 27;
const lavoroUtente = "Studente";

// # Fase di elaborazione
const fraseConPiu = `Mi chiamo ` + nomeUtente + `ho ` + etaUtente + `anni e faccio ` + lavoroUtente + `.`;
const fraseTemplate = `Mi chiamo ${nomeUtente}, ho ${etaUtente} anni e faccio ${lavoroUtente}`;
const etaFutura = etaUtente + anniDaAggiungere;


// # Fase di output
console.log(`Mi chiamo ${nomeUtente}, ho ${etaUtente} anni e sono ${lavoroUtente}`);
console.log(fraseTemplate);
console.log(etaFutura);
