//#region Imports
import { Subject, from, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { multicast } from 'rxjs/operators';
////#endregion
/********************************* SECCIÓN 1 **********************************/
/**
 * Un subject es un tipo especial de Observable que permite que los valores
 * sean transmitidos o multicasted a otros observers. Mientras que los
 * Observables son unicast (Cada observer tiene una instancia independiente
 * del Observable), los Subjects son multicast.
 * Cada Subject es un Observable. Así que podemos suscribirnos a este con un
 * Observer.
 * Internamente en el Subject, el método subscribe no invoka una ejecución
 * que entregue valores, simplemente registra este Observer a una lista de
 * Observers, como addEventListener.
 * Cada Subject también es un Observer, ya que también es un objeto con
 * next, error y complete. Así que para alimentar al subject con un nuevo
 * valor, llamamos a next, y este será entregado a los observers.
 */

// const subject = new Subject<number>();

// subject.subscribe({
//     next: (v) => console.log(`observer A: ${v}`)
// });
// subject.subscribe({
//     next: (v) => console.log(`observer B: ${v}`)
// });

// subject.next(1);
// subject.next(2);

// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
/********************************* SECCIÓN 1 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 2 **********************************/
/**
 * Debido a que un Subject también es un Observer, también podemos proporcionar
 * un Subject como argumento a un Observable, como en el ejemplo siguiente:
 *
 * Con este ejemplo, convertimos a un Observable, que es unicast, a un
 * Observable multicast con la ayuda del Subject.
 */

// const subject = new Subject<number>();

// subject.subscribe({
//     next: (v) => console.log(`observer A: ${v}`)
// });
// subject.subscribe({
//     next: (v) => console.log(`observer B: ${v}`)
// });

// const observable = from([1, 2, 3]);

// observable.subscribe(subject);
/********************************* SECCIÓN 2 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 3 **********************************/
/**
 * Para este tipo de funcionamiento, en el que convertimos un Observable
 * en un multicast Observable, gracias a la ayuda del Subject, utilizamos
 * un operador llamado multicast
 */

// const source = from([1, 2, 3]);
// const subject = new Subject();
// const multicasted = source.pipe(multicast(subject));

// // Por debajo del agua estamos realizando, `subject.subscribe({...})`:
// multicasted.subscribe({
//     next: (v) => console.log(`observer A: ${v}`)
// });
// multicasted.subscribe({
//     next: (v) => console.log(`observer B: ${v}`)
// });

// // Por debajo del agua estamos realizando, `source.subscribe(subject)`:
// multicasted.connect();
/********************************* SECCIÓN 3 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 4 **********************************/
/*
*   Una de las variantes de los Subjects es el BehaviorSubject, el cuál
*   tiene la noción del "valor actual".
*/
/********************************* SECCIÓN 4 **********************************/

// const subject = new BehaviorSubject(0); // 0 es el valor inicial

// subject.subscribe({
//     next: (v) => console.log(`Observer A: ${v}`)
// });

// subject.next(1);
// subject.next(2);

// subject.subscribe({
//     next: (v) => console.log(`Observer B: ${v}`)
// });

// subject.next(3);

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 5 **********************************/
/*
*   "ReplaySubject" es similar a "BehaviorSubject" en el sentido que puede
*   enviar valores antiguos a los nuevos suscriptores, pero también puede grabar
*   parte de la ejecución del Observable.
*   En el siguiente ejemplo, vamos a recordar 3 valores
*/
// const subject = new ReplaySubject(3); // buffer 3 valores para los nuevos suscriptores

// subject.subscribe({
//     next: (v) => console.log(`observer A: ${v}`)
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({
//     next: (v) => console.log(`observer B: ${v}`)
// });

// subject.next(5);

/********************************* SECCIÓN 5 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 6 **********************************/
/*
*   El AsyncSubject es una variante en la que sólo el último valor de la ejecución
*   del observable es enviada a sus observers, y solo cuando terminar la ejecución.
*/

// const subject = new AsyncSubject();

// subject.subscribe({
//     next: (v) => console.log(`observer A: ${v}`)
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({
//     next: (v) => console.log(`observer B: ${v}`)
// });

// subject.next(5);
// //subject.complete();

/********************************* SECCIÓN 6 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/
