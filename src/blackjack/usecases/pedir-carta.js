

/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} Retorna un string correspondiente al identificador de una carta
 */
export const pedirCarta = ( deck ) => {

    if ( deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}