/********************************* SECCIÓN 1 **********************************/
// import { Observable } from 'rxjs';
// import { listaAlbums } from './data';

// let listaAlbumsObservable$ = Observable.create(subscriber => {

//     if (document.title !== 'Curso RxJS') {
//         subscriber.error('Título de la página incorrecto.');
//     }

//     for (let album of listaAlbums) {
//         subscriber.next(album);
//     }

//     setTimeout(() => {
//         subscriber.complete();
//     }, 2000);

//     return () => console.log('Ejecutando código de finalización.');

// });

// listaAlbumsObservable$.subscribe(album => console.log(album.titulo));

/********************************* SECCIÓN 1 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 2 **********************************/
// import { of } from 'rxjs';
// import { listaAlbums } from './data';

// let origen1$ = of('hello', 10, true, listaAlbums[0].titulo);

// origen1$.subscribe(value => console.log(value));

/********************************* SECCIÓN 2 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 3 **********************************/
// import { from } from 'rxjs';
// import { listaAlbums } from './data';

// let origen2$ = from(listaAlbums);

// origen2$.subscribe(album => console.log(album.titulo));


/********************************* SECCIÓN 3 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 4 **********************************/
// import { from, of, concat } from 'rxjs';
// import { listaAlbums } from './data';

// let origen2$ = from(listaAlbums);
// let origen1$ = of('hello', 10, true, listaAlbums[0].titulo);

// concat(origen1$, origen2$)
//     .subscribe(value => console.log(value));
/********************************* SECCIÓN 4 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/

/********************************* SECCIÓN 5 **********************************/
// import { fromEvent } from 'rxjs';
// import { listaAlbums } from './data';

// let button = document.querySelector('#btnAlbums');

// fromEvent(button, 'click')
//     .subscribe(event => {

//         console.log(event);

//         let albumsDiv = document.querySelector('#divAlbums');

//         for (let album of listaAlbums) {
//             albumsDiv.innerHTML += album.titulo + '<br>';
//         }

//     });
/********************************* SECCIÓN 5 **********************************/

/*=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=||=*/