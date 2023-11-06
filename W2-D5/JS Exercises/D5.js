/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for ( i = 0; i < pets.length; i++ ){
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.shift();
pets.push("redfish");
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

let licensePlate;

cars.forEach(cars => {

  if (cars.brand === "Ford") {
    cars["licensePlate"] = "AB123CD";
  }
  if (cars.brand === "Peugeot") {
    cars["licensePlate"] = "EF123GH"
  }
  if (cars.brand === "Volkswagen") {
    cars["licensePlate"] = "IL123MN"
  }
});
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push(
    {
    brand: 'Fiat',
    model: 'Panda',
    color: 'green',
    trims: ['titanium', 'st', 'elegant'],
    licensePlate: "PP123RR"
    }
);

let trims = [['titanium', 'st', 'active'], ['allure', 'GT'], ['life', 'style', 'r-line'], ['titanium', 'st', 'elegant']];
trims.forEach(trims => {
  trims.pop();
});

console.log(trims);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
trims =[['titanium', 'st', 'active'], ['allure', 'GT'], ['life', 'style', 'r-line'], ['titanium', 'st', 'elegant']];

justTrims.push([trims[0] [0]], [trims[1] [0]], [trims[2] [0]], [trims[3] [0]]);
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for ( let i = 0; i < cars.length; i++ ) {
  let y = cars[i];
  let x = y.color;
  if (x.substr(0,1) === "b") {
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
};

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

var i = 0;
while (numericArray[i] !== 66) {
  console.log(numericArray[i])
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const posizioneAlfabeto = [];

for ( i = 0; i < charactersArray.length; i++ ) {
  const lettera = charactersArray[i];
  let number = 0;
  switch (lettera) {
    case 'g':
      number = 7
    break;
    case 'n':
      number = 14
    break;
    case 'u':
      number = 21
    break;
    case 'z':
      number = 26
    break;
    case 'd':
      number = 4
    break;
  }
  posizioneAlfabeto.push(number);
}
console.log(posizioneAlfabeto);