// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

// BONUS:
// Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.


// prende gli elemeti da html
const countdownElement = document.getElementById("countdown");
const numbersListElement = document.getElementById('numbers-list');
const formElement = document.getElementById('answers-form');
const inputUser = document.querySelectorAll("input");
const messageElement = document.getElementById('message');

// setta il range per la funzione dei numeri casuali
const min = 1;
const max = 50;

// funzione per generare numeri casuali non uguali
function randomNum(min, max) {

    // array vuoto per poi conterrà i numeri generati
    let arrayRandomNum = [];

    for (let i = 0; arrayRandomNum.length < 5; i++) {

        // genera un numero e lo assegna a una variabile
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        // condizione per controllare che il numero generato non sia già presente e in caso pusharlo nell'array
        if (!arrayRandomNum.includes(num)) {
            arrayRandomNum.push(num);
        }
        // creazione di li che comprariranno a schermo contenenti i valori generati
        numbersListElement.innerHTML = `<li>${arrayRandomNum[0]}</li><li>${arrayRandomNum[1]}</li><li>${arrayRandomNum[2]}</li><li>${arrayRandomNum[3]}</li><li>${arrayRandomNum[4]}</li>`;
    }
    return arrayRandomNum;
}

// funzione per il countdown
function timer() {
    // variabile che comparirà a schermo che verrà decrementata
    let count = 30;
    // dichiarazione funzione asincrona
    const countdown = setInterval(() => {

        countdownElement.innerHTML = --count;
        // condizione che modificherà i diplay degli elementi quando il timer sarà a 0
        if (count <= 0) {
            clearInterval(countdown);
            countdownElement.style.display = "none";
            numbersListElement.style.display = "none"; // ERRORE DA CORREGGERE (NON SCOMPAIONO I NUMERI)
            formElement.classList.remove('d-none');
        }
    }, 1000);
}

// esecuzione funzioni
const saveRandomNum = randomNum(min, max);
timer();


// evento quando il form sarà inviato tramite bottone
formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    // array che conterrà i numeri inseriti dall'utente
    const arrayInputUser = [];
    // ciclo per inserire i numeri nell'array
    for (let i = 0; i < inputUser.length; i++) {
        const value = parseInt(inputUser[i].value);
        arrayInputUser.push(value);
    }
    // variabile per contare i numeri corretti
    let correctNum = 0;
    // array che conterrà i numeri indivinati
    const arrayCorrectNum = [];
    // doppio ciclio per scorrere gli array dei numeri dell'utente e generati e confrontare i valori
    for (let i = 0; i < arrayInputUser.length; i++) {
        for (let j = 0; j < saveRandomNum.length; j++) {
            if (arrayInputUser[i] === saveRandomNum[j]) {
                correctNum++;
                arrayCorrectNum.push(arrayInputUser[i]);
            }
        }
    }

    // messaggio a schermo con risultati
    messageElement.innerHTML = `Hai indovinato ${correctNum} numero/i che sono: ${arrayCorrectNum.join(", ")} `

})


