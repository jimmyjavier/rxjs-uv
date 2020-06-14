//#region Imports
import { Observable, from, fromEvent } from 'rxjs';
import { listaAlbums } from './data';
////#endregion
/********************************* SECCIÓN 1 **********************************/
/*
*  Un Observer es un consumidor de valores entregado por un Observable.
*  Los Observers son simplemente una serie de callbacks, una por cada
*  tipo de notificacíon entregada por el Observable: next, error y complete.
*   El siguiente es un ejemplo de un típico objeto Observer.
*   Y para utilizar un observer debemos pasárselo al método subscribe del observable.
*
*  Los Observers son solo objetos con tres funciones, una para cada tipo de notificación
*   que puede entregar el Observable.
*/

// const observer = {
//     next: x => console.log(`El observer obtuvo el siguiente valor: ${x}`),
//     error: err => console.error(`El observer obtuvo un error: ${err}`),
//     complete: () => console.log(`El observer obtuvo una notificación completa.`)
// };

//observable.subscribe(observer);

/********************************* SECCIÓN 1 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 2 **********************************/
// let albums$ = from(listaAlbums);

// let albumObserver = {
//     next: album => console.log(`Título: ${album.titulo}`),
//     error: err => console.log(`ERROR: ${err}`),
//     complete: () => console.log(`¡Completado!`)
// };

// // albums$.subscribe(albumObserver);

// albums$.subscribe(
//     book => console.log(`Título: ${book.titulo}`),
//     err => console.log(`ERROR: ${err}`),
//     () => console.log(`¡Completado!`)
// );

/********************************* SECCIÓN 2 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 3 **********************************/
/*
*  Los Observers en RxJS pueden ser parciales, ya que si no proporcionamos
*   alguna función, la ejecución del Observable se ejecutará de manera normal,
*   excepto que unas notificaciones serán ignoradas.
*   El siguiente es un ejemplo sin el callback "complete".
*/

// const observer = {
//     next: x => console.log(`Observer got a new value: ${x}`),
//     error: err => console.log(`Observer got an error: ${err}`)
// };

/********************************* SECCIÓN 3 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 4 **********************************/
/*
*   Cuando nos suscribimos a un Observable, también podemos proporcionar
*   los callbacks del observer como argumentos, sin necesidad de estar
*   anexadas a un objeto Observer.
*
*/

// observable.subscribe(x => console.log('Observer obtuvo el siguiente valor: ' + x));

/********************************* SECCIÓN 4 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 5 **********************************/
/*
*   Internamente, en observable.subscribe, se creará un objeto Observer
*   usando el primer callback como "next".
*/

// observable.subscribe(
//     x => console.log(`El Observer obtuvo el siguiente valor: ${x}`),
//     err => console.log(`El Observer obtuvo un error: ${err}`),
//     () => console.log(`El Observer obtuvo una notificación complete`)
// );

/********************************* SECCIÓN 5 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 6 **********************************/
/*
*   Ejecución de observers distintos
*
*/

// let horaActual$ = new Observable(subscriber => {
//     const horaString = new Date().toLocaleTimeString();
//     subscriber.next(horaString);
//     subscriber.complete();
// });

// horaActual$.subscribe(
//     tiempoActual => console.log(`Observer 1: ${tiempoActual}`)
// );

// setTimeout(() => {
//     horaActual$.subscribe(
//         tiempoActual => console.log(`Observer 2: ${tiempoActual}`)
//     );
// }, 1000);

// setTimeout(() => {
//     horaActual$.subscribe(
//         tiempoActual => console.log(`Observer 3: ${tiempoActual}`)
//     );
// }, 2000);
/********************************* SECCIÓN 6 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 7 **********************************/
/*
*   Ejecución de distintas suscripciones, y terminación al agregar la suscripción
*   a una suscripción padre.
*/
// let temporizadorDiv = document.querySelector('#temporizador');
// let botonTemporizador = document.querySelector('#btnTemporizador');

// let temporizador$ = new Observable(subscriber => {
//     let i = 0;
//     let intervalID = setInterval(() => {
//         subscriber.next(i++);
//     }, 1000);

//     return () => {
//         console.log('Ejecutando código de terminación.');
//         clearInterval(intervalID);
//     }
// });

// let temporizadorSubscription = temporizador$.subscribe(
//     valor => temporizadorDiv.innerHTML += `${new Date().toLocaleTimeString()} (${valor}) <br>`,
//     null,
//     () => console.log('¡Completado!')
// );

// let temporizadorConsolaSubscription = temporizador$.subscribe(
//     valor => console.log(`${new Date().toLocaleTimeString()} (${valor})`)
// );

// temporizadorSubscription.add(temporizadorConsolaSubscription);

// fromEvent(botonTemporizador, 'click')
//     .subscribe(
//         event => temporizadorSubscription.unsubscribe()
//     );

/********************************* SECCIÓN 7 **********************************/