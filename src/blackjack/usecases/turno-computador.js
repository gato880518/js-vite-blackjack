import { pedirCarta,valorCarta,crearCartaHTML } from "./";   // llamo esta funcion por que la estoy utilizando aca




/**
 *  turno de la computadora
 * @param {number} puntosMinimos  que la computadora necesita para ganar
 * @param {HTMLElement}  elemento html para mostrar los puntos   
 * @param {HTMLElement}  divCartasComputadora elemento html para mostrar las cartas   
 * @param {Array<string>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML ,divCartasComputadora, deck = [] ) => {

  if(!puntosMinimos) throw new Error('Puntos minimos es necesarios');
  if(!puntosHTML) throw new Error('Argumento PuntosHTML es necesario');

  let puntosComputadora = 0;
 
    

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;              // AQUI la la funcion aparte de ser el turno de la computadora , tambien esta colocando en el html los puntos del mismo que esto haria que nuestra funcion haga mas de una cosa
                                                                  // por lo que para no hacer una refactorizacion tan abismal tambien ocupamos como argumentos los puntos html que es donde yo quiero que muestre los elementos html
         const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

