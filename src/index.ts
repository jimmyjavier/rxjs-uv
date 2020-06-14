/********************************* SECCIÓN 1A **********************************/
/*
* Normalmente registramos eventos de escucha de la siguiente manera
*/
// document.addEventListener('click', () => console.log('clicked'));
/********************************* SECCIÓN 1A **********************************/

/********************************* SECCIÓN 1B **********************************/
/*
* En RxJS creamos en su lugar un Observable
*/

// import { fromEvent } from 'rxjs';
// fromEvent(document, 'click').subscribe(() => console.log('clicked'));
/********************************* SECCIÓN 1B **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 2A **********************************/
/*
* Unas de las características que hacen a RxJS tan poderoso es su habilidad
* de crear valores usando funciones puras. Esto ocasiona que nuestro código
* sea menos propenso a errores.
* En el siguiente ejemplo, creamos una función impura que devuelve el número
* de clicks en nuestra página.
*/

// let count = 0;
// document.addEventListener('click', () => console.log(`Clicked ${++count} veces.`));
/********************************* SECCIÓN 2A **********************************/

/********************************* SECCIÓN 2B **********************************/
/*
* En RxJS aislamos el State de nuestra aplicación.
* En este caso el operador "scan" actúa como el método reduce de los arreglos,
*  1. Toma un valor, el cual es expuesto a una función "callback".
*  2. El valor regresado de esa función es será el siguiente valor que se regrese
*     cuando se llame nuevamente a esa función.
*/
// import { fromEvent, from } from 'rxjs';
// import { scan } from 'rxjs/operators';

// fromEvent(document, 'click')
//     .pipe(scan(count => count + 1, 0))
//     .subscribe(count => console.log(`Clicked ${count} veces.`));
/********************************* SECCIÓN 2B **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/


/********************************* SECCIÓN 3A **********************************/
/*
* RxJS tiene un amplio rango de operadores que nos ayudan a controlar
* el flujo de los eventos a través de nuestros Observables.
* En el siguiente ejemplo, mostramos cómo permitir un clic por segundo.
*/

//Permitir un clic por segundo
// let count = 0;
// let rate = 1000;
// let lastClick = Date.now() - rate;
// document.addEventListener('click', () => {
//     if (Date.now() - lastClick >= rate) {
//         console.log(`Clicked ${++count} veces.`);
//         lastClick = Date.now();
//     }
// });
/********************************* SECCIÓN 3A **********************************/


/********************************* SECCIÓN 3B **********************************/
/*
*   En RxJS utilizamos el operador throttleTime y scan para la misma acción.
*/

// import { fromEvent, from } from 'rxjs';
// import { throttleTime, scan } from 'rxjs/operators';

// fromEvent(document, 'click')
//     .pipe(
//         throttleTime(1000),
//         scan(count => count + 1, 0)
//     )
//     .subscribe(count => console.log(`Clicked ${count} veces.`));
/********************************* SECCIÓN 3B **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/


/********************************* SECCIÓN 4A **********************************/
/*
*   También podemos transformar los valores que pasamos en nuestros Observables.
*   Aquí realizamos una suma de las posiciones x del mouse.
*/
// let count = 0;
// const rate = 1000;
// let lastClick = Date.now() - rate;
// document.addEventListener('click', event => {
//     if (Date.now() - lastClick >= rate) {
//         count += event.clientX;
//         console.log(count);
//         lastClick = Date.now();
//     }
// });
/********************************* SECCIÓN 4A **********************************/

/********************************* SECCIÓN 4B **********************************/
/*
* Con RxJS utilizamos map
*/
// import { fromEvent } from 'rxjs';
// import { throttleTime, map, scan } from 'rxjs/operators';

// fromEvent(document, 'click')
//     .pipe(
//         throttleTime(1000),
//         map(event => event.clientX),
//         scan((count, clientX) => count + clientX, 0)
//     )
//     .subscribe(count => console.log(count));
/********************************* SECCIÓN 4B **********************************/