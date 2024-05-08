import _ from 'underscore';    // aqui estoy renombrando el paquete como lo tengo en la parte de abajo en el renglo 40

// import {crearDeck as crearnuevodeck} from './usecases/crear-deck.js'               // esto es un ejemplo de como puedo que le puedo cambiar el nombre a lo que estoy  importando
// import cualquierNombreParaCrearUnNuevoDeck from './usecases/crear-deck.js'              // a la exportacion por defecto le puedo dar cualquier nombre
//  import crearDeck,{miNombre} from './usecases/crear-deck.js'     // si queremos las importanciones individuales podemos colocar una coma y unas llaves y la podemos utilizar aqui         
// console.log(miNombre);

import { crearDeck,pedirCarta,valorCarta , turnoComputadora,crearCartaHTML} from "./usecases/";  // esto le realizo para que se vean mas limpias mis exportaciones recordemos que esto lo estoy llamano ahora de mi archivo index, esto se conoce como archivos de barril 


/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');


deck =  crearDeck(tipos,especiales);



// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck);
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaHTML(carta);
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1],divCartasComputadora , deck );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugadorpuntosHTML[1],divCartasComputadora , deck );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, puntosHTML[1],divCartasComputadora , deck );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});






