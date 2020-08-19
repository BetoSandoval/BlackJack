/** 
* 2C = Two of Clubs
* 2D = Two of Diaminds
* 2H = Tow of hearts
* 2S = Tow of Sapades
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'k'];
let puntosJugador = 0;
    putnosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');

const puntosHTML = document.querySelectorAll('small');


// Esta funcion crea una nueva baraja
const crearDeck = () => {

    for( let i = 2; i<= 10; i++ ){
        for( let tipo of tipos){
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos){
        for( let esp of especiales ){
            deck.push( esp + tipo );
        }
    }


    deck = _.shuffle( deck );
    return deck;
}

crearDeck();

// Esta funcion permite tomar una carta
const pedirCarta = () => {

    if (deck.length === 0){
        throw 'No hay cartas en el deck';
    }

    carta = deck.pop();

    return carta;
}

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ? 
        (valor === 'A') ? 11 : 10 
        : valor * 1;
}

// Eventos
btnPedir.addEventListener('click', () =>{
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
});