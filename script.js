//Scrivere un programma che chieda all’utente:
//Il numero di chilometri da percorrere
//Età del passeggero
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.



const button = document.querySelector('.submit');
console.log(button);


button.addEventListener('click', function(){
    const Km = document.querySelector('.insert-km').value;
    console.log(Km);

    const Age = document.querySelector('.insert-age').value;
    console.log(Age);

if (km === '' || age === ''){
    alert('devi inserire due valori !' )
} else {
    console.log(km);
    console.log(age);
}
const kmPrice = 0.21;
const discountUnder18 = 20;
const discountOver65 = 40;

let km, age, price;
let message = 'Il prezzo del tuo biglietto è: ';

if(isNaN(km) || isNaN(age)){
    location.reload();
}
price = kmPrice * km;

if(age < 18){
    price = price - (price * discountUnder18/100);
} else if(age >= 65){
    price = price - (price * discountOver65/100);
}
})

