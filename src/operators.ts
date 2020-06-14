//#region Imports
import { Observable, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, tap, catchError, filter, takeUntil } from 'rxjs/operators';
////#endregion

/********************************* SECCIÓN 1 **********************************/
/**
 * post
 *  -body
 *  -id
 *  -title
 *  -userId
 */

// ajax('https://jsonplaceholder.typicode.com/posts')
//     .pipe(
//         mergeMap(ajaxResponse => ajaxResponse.response),
//         //filter(post => post.id < 50 && post.id % 2 === 0),
//         tap(post => console.log(`Publicación: ${post.id}`)),
//         catchError(err => throw `Something bad happened - ${err.message}`)
//     )
//     .subscribe(
//         valor => console.log(JSON.stringify(valor)),
//         error => console.log(`ERROR: ${error}`)
//     );
/********************************* SECCIÓN 1 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 2 **********************************/
/**
 * Cancelamos la ejecución del temporizador con el operador takeUntil
  */

// let temporizadorDiv = document.querySelector('#temporizador');
// let btnTemporizador = document.querySelector('#btnTemporizador');

// let temporizador$ = new Observable(subscriber => {
//     let i = 0;
//     let intervalID = setInterval(() => {
//         subscriber.next(i++);
//     }, 1000);

//     return () => {
//         console.log('Ejecutando código de finalización.');
//         clearInterval(intervalID);
//     }
// });

// let cancelarTemporizador$ = fromEvent(btnTemporizador, 'click');

// temporizador$.pipe(
//     takeUntil(cancelarTemporizador$)
// ).subscribe(
//     value => temporizadorDiv.innerHTML +=
//         `${new Date().toLocaleTimeString()} (${value}) <br>`,
//     null,
//     () => console.log('¡Completado!')
// );

/********************************* SECCIÓN 2 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

