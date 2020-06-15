/********************************* SECCIÓN 1A **********************************/
// document.addEventListener('click', () => console.log('clicked'));
/********************************* SECCIÓN 1A **********************************/

/********************************* SECCIÓN 1B **********************************/

// import { fromEvent } from 'rxjs';
// fromEvent(document, 'click').subscribe(() => console.log('clicked'));
/********************************* SECCIÓN 1B **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 2A **********************************/

// let count = 0;
// document.addEventListener('click', () => console.log(`Clicked ${++count} veces.`));
/********************************* SECCIÓN 2A **********************************/

/********************************* SECCIÓN 2B **********************************/

// import { fromEvent, from } from 'rxjs';
// import { scan } from 'rxjs/operators';

// fromEvent(document, 'click')
//     .pipe(scan(count => count + 1, 0))
//     .subscribe(count => console.log(`Clicked ${count} veces.`));
/********************************* SECCIÓN 2B **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/


/********************************* SECCIÓN 3A **********************************/


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