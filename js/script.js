// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

// BONUS:
// Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.


const countdownElement = document.getElementById("countdown");
const numbersListElement = document.getElementById('numbers-list');
const formElement = document.getElementById('answers-form');
const inputUtente = document.querySelectorAll("input");
const messageElement = document.getElementById('message');


const min = 1;
const max = 50;

function randomNum(min, max) {

    let arrayRandomNum = [];

    for (let i = 0; arrayRandomNum.length < 5; i++) {

        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!arrayRandomNum.includes(num)) {
            arrayRandomNum.push(num);
        }
        numbersListElement.innerHTML = `<li>${arrayRandomNum[0]}</li><li>${arrayRandomNum[1]}</li><li>${arrayRandomNum[2]}</li><li>${arrayRandomNum[3]}</li><li>${arrayRandomNum[4]}</li>`;
    }
    return arrayRandomNum;
}



console.log(randomNum(min, max));
