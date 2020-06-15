//#region Imports
import { Subject, from, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { multicast } from 'rxjs/operators';
////#endregion
/********************************* SECCIÓN 1 **********************************/

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

/********************************* SECCIÓN 4 **********************************/


/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 5 **********************************/

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
