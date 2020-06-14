/********************************* SECCIÓN 1 **********************************/
/*
* Los Observables son colecciones perezosas de valores múltiples.
* En el siguiente ejemplo se emiten los valores 1,2 y 3 de manera inmediata
* o síncrona al suscribirnos, y el valor 4 después de 2.5 segundos.
* y después se completa.
* Para invocar a un observable y ver los valores que emite,
* es necesario suscribirnos
*/
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
/*
*   Los Observables son similares a las funciones, debido a que no se ejecutan
*   hasta que no son llamados.
*
*/
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
/*
* El mismo comportamiento lo podemos realizar utilizando Observables.
* La salida es la misma de la función debido a que las funciones y los observables
* son cómputos perezosos.
* SUSCRIBIRSE a un OBSERVABLE es lo mismo que llamar a una función.
*/

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
/*
*   Algunos piensas que los Observables son asíncronos, pero esto no es cierto,
*   ya que podemos realizar operaciones síncronas.
*   Entonces, cuál es la diferencia entre una función y un Observable:
*   Los Observables pueden devolver "múltiples valores" en el tiempo
*   y una función no.
*   En el ejemplo siguiente tengo una función que se ejecuta de manera síncrona.
*/
// function foo() {
//     console.log('Hello');
//     return 42;
//     return 100;
// }

// foo();
/********************************* SECCIÓN 3A **********************************/

/********************************* SECCIÓN 3B **********************************/
/*
* En el siguiente ejemplo el observable regresa tres valores
*
*/
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
/*
* En este devuelve 3 valores, espera 2.5 segundo y regresa un último valor.
* En CONCLUSIÓN, con "func.call()" pedimos que nos "devuelvan un valor de forma síncrona".
* con "observable.subscribe()" pedimos que nos "devuelvan cualquier cantidad de valores
* ya sea de forma síncrona o asíncrona."
*/
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
/*
 * Podemos crear Observables utilizando "new Observable()"
 * o un operador de creación, y nos suscribimos a ellos con un "Observer",
 * se ejecutan para entregar las notificaciones "next", "error" o "complete",
 * y su ejecución puede ser eliminada.
 *
 * Existen elementos principales con los Observables:
 *  - Crear un Observable
 *  - Suscribirse al Observable
 *  - Ejecutar el Observable
 *  - Eliminar el Observable.
 *
 * En el siguiente ejemplo tenemos un observable que emite cada segundo la cadena
 * 'hola'
 * En este ejemplo, la función subscribe es la pieza más importante para describir
 * al Observable.
 * Como podemos ver, el nombre de la función que pasamos y la que llamamos es la misma,
 * Esta función es llamada cada vez que se suscribe un nuevo Observer y es
 * diferente para cada uno de ellos.
 */

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
/*
 * El código dentro de new Observable... representa "la ejecución
 * del Observable", y es un acción que solo ocurre para cada Observer
 * que se suscribe. Dicha ejecución puede producir múltiples valores en el tiempo,
 * ya sea de forma síncrona o asíncrona.
 * Hay tres tipos de valores que que la ejecución de un observable puede entregar:
 *  La notificación "next":  envía un valor como un número, cadena, objeto, etcétera.
 *	La notificación "Error": envía un Error de JavaScript o Excepción.
 *  La notificación "Complete": no envía un valor.

 * Las notificaciones "next" son el tipo más importante y común, ya que representan
 * el dato actual siendo entregado a un suscriptor.

 * Las notificaciones "Error" y "Complete" pueden ocurrir solo una vez durante
 * la ejecución del observable y puede ser alguna de ellas.

 * En la ejecución de un Observable, 0 a * notificaciones pueden ser entregadas.
 * Si una notificación "Error" o "Complete" es entregada,
 * entonces nada puede ser entregado después de esta.
 *
 * El siguiente es un ejemplo de la ejecución de un Observable que devuelve
 * 3 notificaciones y al final se completa.
 */

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
/*
 * El siguiente es un observable que se completa y manteniendo el contrado
 * de un observable, ya no envía el valor siguiente.
 */
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
/*
 * También es una buena idea envolver el código de ejecución
 * de la función subscribe con bloques de validación de error
 * que entregarán una notificación de Error si encuentran una
 * Excepción.
 */
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
/*
*   Cuando nos suscribimos, obtenemos de regreso un objeto suscription,
*   el cual representa la ejecución actual.
*   Para cancelar la ejecución simplemente llamamos a la función "unsubscribe()".
*/

// import { from } from 'rxjs';

// const observable = from([10, 20, 30]);
// const subscription = observable.subscribe(x => console.log(x));

// //Después:
// subscription.unsubscribe();

/********************************* SECCIÓN 8 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 9 **********************************/
/*
*  Cada observable debe definir como desechar los recursos de esa ejecución
*  cuando creamos el observable, utilizando create(). Lo podemos realizar
*  mediante el regreso de una función personalizada llamada unsubscribe
*  dentro de la función subscribe
*/

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
