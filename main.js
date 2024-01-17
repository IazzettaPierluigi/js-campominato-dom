// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: Nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

let campoHtml = document.getElementById('campo-gioco')
let playBtn = document.getElementById('play-btn')
let selectHtml = document.getElementById('cmSelect')

//genero l'array da riempire 
let arrayBombe = []



playBtn.addEventListener('click', function(){



    //per pulire il campo ogni volta che si  cambia difficoltà e si preme play
    campoHtml.innerHTML = ''

    //riempio l'arrayBombe con i numeri casuali unici da 1 a 100
    while (arrayBombe.length < 16){
        let numeroRandom = generaNumeroRandom(1, 100);

        if (!arrayBombe.includes(numeroRandom)){
            arrayBombe.push(numeroRandom)
        }
    }

    for (let i = 1; i <= cmSelect.value; i++){
        //creo il div al quale darò classe box
        let box = document.createElement("div")
    
        //aggiungo la classe box al div creato
        box.classList.add("box")

        //all'interno di box aggiungo il valore di i che è progressivo da 1 a 100
        box.innerHTML = `<span>${i}</span>`;

        //aggiungo box al campo da gioco dopo averlo identificato fuori dalla funzione con un getelementbyid
        campoHtml.append(box)


        //al click di box la console stampa il valore di i e aggiunge la classe custom blue che ho nel mio css
        box.addEventListener('click', function () {
        
            console.log(i)

            box.classList.toggle('blue')
        
        }
        )
    }

    //console log per vedere l'array generato
    console.log(arrayBombe)

})



///////////////////////FUNZIONI///////////////////////!SECTION

//FUNZIONE PER GENERARE IL NUMERO RANDOM
function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }