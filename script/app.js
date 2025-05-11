console.log("FuzzBuzz")

// ---  VARIABILI ---
// Primo Divisore
const PRIMO_DIVISORE = 3
// Secondo Dividsore
const SECONDO_DIVISORE = 5
// Numero Incrementale
let NumeroIncrem // number

// --- MAIN ---
// Inizio Ciclo per conteggio
for (let i = 0; i < 100; i++) {
    NumeroIncrem = i + 1
    console.log(`Ciclo=${i} NumIncrem=${NumeroIncrem}`)
    //  calcolo del modulo del primo divisore
    let Result_FirtModule = NumeroIncrem % PRIMO_DIVISORE //numeber
    console.log("Moudulo di " + PRIMO_DIVISORE + " = " + Result_FirtModule)
    //  calcolo del modulo del secondo divisore
    let Result_SecondModule = NumeroIncrem % SECONDO_DIVISORE //number
    console.log("Moudulo di " + SECONDO_DIVISORE + " = " + Result_SecondModule)
    //  CONTROLLO sull'output

    console.log("--------------------------")
}
