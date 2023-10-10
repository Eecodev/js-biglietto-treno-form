//Scrivere un programma che chieda all’utente:
//Il numero di chilometri da percorrere
//Età del passeggero
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.



const button = document.getElementById('submit');
console.log(button);


button.addEventListener('click', function(){
    const Km = document.querySelector('.insert-km').value;
    console.log(Km);

    const Age = document.querySelector('.insert-age').value;
    console.log(Age);

if (Km === '' || Age === ''){
    alert('devi inserire due valori !' )
} else {
    console.log(Km);
    console.log(Age);
}

let price = Km * 0.21;

if ( Age === 'under-18' ) {
    price = price - (price * 20/100); 
} else if ( Age === 'over-65' ) {
    price = price - (price * 40/100);
} 
const ticket = document.getElementById( 'ticket' );
ticket.innerHTML = 'Your ticket price is: €' + price;
})

