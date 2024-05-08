

/**
 *  Esta función me permite tomar una carta
 * 
 * @param {Array<string>} deck  es un arreglo de string
 * @returns {string}  retorna la carta del deck
 */


export const pedirCarta = (deck) => {

    if (!deck ||  deck.length === 0 ) {    // esto significa si el deck no existe o el deck tiene cero cartas 
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
