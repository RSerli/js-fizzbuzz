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
    //  calcolo del resto con il primo divisore
    let Result_FirtModule = NumeroIncrem % PRIMO_DIVISORE //numeber
    console.log("Moudulo di " + PRIMO_DIVISORE + " = " + Result_FirtModule)
    //  calcolo del rsto  con il secondo divisore
    let Result_SecondModule = NumeroIncrem % SECONDO_DIVISORE //number
    console.log("Moudulo di " + SECONDO_DIVISORE + " = " + Result_SecondModule)
    // --- CONTROLLO sull'output ---
    // SE il resto è 0 con il primo divisore restitusce --> Fizz
    if (Result_FirtModule == 0 && Result_SecondModule != 0) {
        console.log("Fizz")
    }
    // SE il resto è 0 con il secondo divisore restitusce --> Buzz
    else if (Result_FirtModule != 0 && Result_SecondModule == 0) {
        console.log("Buzz")
    }
    // SE il resto è 0 con il primo divisore sia con il secondo restitusce --> FizzBuzz
    else if (Result_FirtModule == 0 && Result_SecondModule == 0) {
        console.log("FizzBuzz")
    }
    // ALTRIMENTI restituisce solo il numero
    else {
        console.log(NumeroIncrem)
    }
    console.log("--------------------------")
}
