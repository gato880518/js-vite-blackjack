
import _ from 'underscore'

// export const miNombre = 'fernado'  // esto con fines explicativo lo exportamos de manera menudiada o independiente




/**
 * esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCartas      EJEMPLO : ['C','D','H','S'];    // esto se hace para que cuando otros desarrollandores pongan el cursor sobre sobre la funcion crear deckt que se encuentra en el index sepan que tipos de datos arroja esa funcion
 * @param {Array<String>} tiposEspeciales    EJEMPLO :  ['A','J','Q','K'];
 * @returns {Array<String>}   retono un nuevo deck de cartas
 */





// Esta función crea un nuevo deck
 export const crearDeck = (tiposDeCartas, tiposEspeciales) => {


    if(!tiposDeCartas || tiposDeCartas.length ===0) throw new Error ('TiposDeCarta es obligatorio como un arreglo de string')
   
    if(!tiposEspeciales || tiposEspeciales.length ===0) throw new Error ('TiposEspeciales es obligatorio como un arreglo de string')
   
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );    // esto lo colocamos alla arriba renombramos el paquete como lo tenemos aqui con el quion bajo
   
    return deck;
}


// export default crearDeck;


