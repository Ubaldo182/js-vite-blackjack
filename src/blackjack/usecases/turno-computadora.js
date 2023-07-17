import { pedirCarta, valorCarta, crearCartaHTML } from "./";


/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos
 * @param {Array<String>} deck 
 * @param {HTMLElement} puntosHTML
 * @param {HTMLElement} divCartasComputadora
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error( 'puntos minimos son necesarios' );
    if( !deck ) throw new Error( 'el deck es necesario' );
    if( !puntosHTML ) throw new Error( 'argumento puntosHTML es necesario' );

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
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