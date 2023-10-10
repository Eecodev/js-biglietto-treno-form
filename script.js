//Scrivere un programma che chieda all’utente:
//Il numero di chilometri da percorrere
//Età del passeggero
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.

const kmPrice = 0.21;
const discountUnder18 = 20;
const discountOver65 = 40;

let km, age, price;
let message = 'Il prezzo del tuo biglietto è: ';

km = parseInt(prompt('Quanti km vuoi percorrere ?'));
age = parseInt(prompt('Quanti anni hai ?'));

if(isNaN(km) || isNaN(age)){
    location.reload();
}

// console.log(km, age);
price = kmPrice * km;

// console.log(price);

if(age < 18){
    price = price - (price * discountUnder18/100);
} else if(age >= 65){
    price = price - (price * discountOver65/100);
}

// console.log(price);


