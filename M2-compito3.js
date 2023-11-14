//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

// let num1 =19634653;
// let num2= 98217348;


// if (num1>num2) {
//   console.log("num1 is bigger than num2");
// } else{
//   console.log("num2 is buigger than num1");
// }

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/*
let num= 20;

if (num < 5) {
  console.log("Tiny");
}
  else if (num < 15) {
  console.log("Medium");
  }
  else if (num < 20) {
    console.log("Large");
    }
    else {
      console.log("Huge");
      }
*/

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/*
for ( i = 0; i<=10; i++) {
  // console.log("inside");
  if ((i === 3) || (i===8)) {
    continue;
  };
  console.log(i);
} */


/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/


/*
for (let i = 0; i <= 15; i++) {
  if (i%2 === 0) {
    console.log(i + ", this number is even!");
  }
    else {console.log(i + ", this number is odd!");
  }
}
*/

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
let number1 = 12;
let number2 = 4;

if ((number1===8) || (number2 === 8) ) {
  console.log("One of these numbers is 8");
} else if (((number1+ number2) === 8)) {
  console.log("Sum is 8");
} else if (((Math.abs(number1 - number2))===8)){
  console.log("Subtraction is 8 or -8");
} else {
  console.log("No 8's!");
}
*/

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
let totalShoppingCart=65;
let spedizione = 10;


  let complessivo = totalShoppingCart+spedizione;

if (totalShoppingCart > 50) {
  console.log("Spedizione gratuita!");
} else {

  console.log("Totale: " + complessivo);
}
*/

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/*
let totalShoppingCart=63;
let spedizione = 10;
let sconto = 0.2;

let complessivo = totalShoppingCart+spedizione;

if (((totalShoppingCart-(totalShoppingCart*0.2))) > 50) {

  console.log("Spedizione gratuita! Valore a pagamento: " + complessivo + "€");
} else {
  
  console.log("Totale: " + complessivo + "€");
}
*/

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/*
let isMale = false;

let gender = isMale ? "male" : "female" ; 

console.log(gender);
*/

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/*

for (let i = 1; i < 100; i++) {
  if (i%3 === 0) {
    console.log(i +" Fizz");
  } else if (i%5 === 0) {
    console.log(i +" Buzz");
  } else if (i%3 === 0 && i%5===0) {
    console.log(i + " FizzBuzz");
  } else {console.log(i);
  }
}

*/