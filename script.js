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
    const km = document.querySelector('.insert-km').value;
    console.log(km);

    const age = document.querySelector('.insert-age').value;
    console.log(age)

if (km === '' || age === ''){
    alert('devi inserire due valori !' )
} else {
    console.log(km);
    console.log(age);
}
})

