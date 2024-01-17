// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


let campoHtml = document.getElementById('campo-gioco')
let playBtn = document.getElementById('play-btn')
let selectHtml = document.getElementById('cmSelect')


playBtn.addEventListener('click', function(){

    //per pulire il campo ogni volta che si  cambia difficoltà e si preme play
    campoHtml.innerHTML = ''

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

})
