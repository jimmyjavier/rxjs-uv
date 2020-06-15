/********************************* SECCIÓN 1 **********************************/

// import { Observable } from 'rxjs';

// const observable = new Observable(subscriber => {
//     subscriber.next(1);
//     subscriber.next(2);
//     subscriber.next(3);

//     setTimeout(() => {
//         subscriber.next(4);
//         subscriber.complete();
//     }, 2500);
// });

// console.log('Antes de la suscripción.');
// observable.subscribe({
//     next(x) { console.log(`Obtuve el valor ${x}`) },
//     error(err) { console.log(`Ocurrió un error: ${err}`) },
//     complete() { console.log(`Completado.`) }
// });
// console.log(`Después de la suscripción.');
/********************************* SECCIÓN 1 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/


/********************************* SECCIÓN 2A **********************************/

// function foo() {
//     console.log('Hello');
//     return 42;
// }

// const x = foo.call(); //Same as foo
// console.log(x);
// const y = foo.call(); //Same as foo
// console.log(y);
/********************************* SECCIÓN 2A **********************************/

/********************************* SECCIÓN 2B **********************************/


// import { Observable, Subscriber } from 'rxjs';
// const foo = new Observable(subscriber => {
//     console.log('Hello');
//     subscriber.next(42);
// });

// foo.subscribe(x => {
//     console.log(x);
// });
// foo.subscribe(y => {
//     console.log(y);
// });
/********************************* SECCIÓN 2B **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/


/********************************* SECCIÓN 3A **********************************/

// function foo() {
//     console.log('Hello');
//     return 42;
//     return 100;
// }

// foo();
/********************************* SECCIÓN 3A **********************************/

/********************************* SECCIÓN 3B **********************************/

// import { Observable } from 'rxjs';
// const foo = new Observable(subscriber => {
//     console.log('Hello');
//     subscriber.next(42);
//     subscriber.next(100);
//     subscriber.next(200);
// });

// console.log('before');
// foo.subscribe(x => {
//     console.log(x);
// });
// console.log('after');

/********************************* SECCIÓN 3B **********************************/

/********************************* SECCIÓN 3C **********************************/

// import { Observable } from 'rxjs';

// const foo = new Observable(subscriber => {
//     console.log('Hello');
//     subscriber.next(42);
//     subscriber.next(100);
//     subscriber.next(200);
//     setTimeout(() => {
//         subscriber.next(300); //Ejecutado de manera asíncrona
//     }, 2500);
// });

// console.log('before');
// foo.subscribe(x => {
//     console.log(x);
// });
// console.log('after');
/********************************* SECCIÓN 3C **********************************/


/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 4 **********************************/


// import { Observable } from 'rxjs';

// const observable = new Observable(function subscribe(subscriber) {
//     const id = setInterval(() => {
//         subscriber.next('hola');
//     }, 1000);
// });

// observable.subscribe(x=>console.log(x));

/********************************* SECCIÓN 4 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 5 **********************************/


// import { Observable } from 'rxjs';

// const observable = new Observable(function subscribe(subscriber) {
//     subscriber.next(1);
//     subscriber.next(2);
//     subscriber.next(3);
//     subscriber.complete();
// });

// observable.subscribe(x => console.log(x));
/********************************* SECCIÓN 5 **********************************/


/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 6 **********************************/

// import { Observable } from 'rxjs';

// const observable = new Observable(function subscribe(subscriber) {
//     subscriber.next(1);
//     subscriber.next(2);
//     subscriber.next(3);
//     subscriber.complete();
//     subscriber.next(4); // Ya no es mostrado, respetando el contrato del observable.
// });

// observable.subscribe(x => console.log(x));
/********************************* SECCIÓN 6 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/


/********************************* SECCIÓN 7 **********************************/

// import { Observable } from 'rxjs';

// const observable = new Observable(function subscribe(subscriber) {
//     try {
//         subscriber.next(1);
//         subscriber.next(2);
//         throw false;
//         subscriber.next(3);
//         subscriber.complete();
//     }
//     catch (err) {
//         console.log("Encontré un error, envío una excepción");
//         subscriber.error(err);  //Entrega un error, si encontró alguno.
//     }
// });

// observable.subscribe(x => console.log(x));
/********************************* SECCIÓN 7 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/


/********************************* SECCIÓN 8 **********************************/


// import { from } from 'rxjs';

// const observable = from([10, 20, 30]);
// const subscription = observable.subscribe(x => console.log(x));

// //Después:
// subscription.unsubscribe();

/********************************* SECCIÓN 8 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 9 **********************************/


// import { Observable } from 'rxjs';

// const observable = new Observable(function subscribe(subscriber) {
//     //Mantenemos el seguimiento del recurso interno
//     const intervalId = setInterval(() => {
//         subscriber.next('hi');
//     }, 1000);

//     //Proporcionamos una manera de cancelar y disponer de el recurso interval
//     return function unsubscribe() {
//         clearInterval(intervalId);
//     };
// });

// console.log('Antes de llamar subscribe');
// var subscription = observable.subscribe(x => console.log(x));
// setTimeout(() => {
//     console.log('entro a un timeout');
//     console.log('Antes de llamar UNSUBSCRIBE');
//     subscription.unsubscribe();
//     console.log('Después de llamar UNSUBSCRIBE');
// }, 5000);

/********************************* SECCIÓN 9 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/
