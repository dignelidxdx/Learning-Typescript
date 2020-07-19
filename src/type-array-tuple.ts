// ------- Tipo: Array -------
 /* Dos notaciones: [] y Array<Type>
ejemplo:

const names = string[];
const months = Array<string>;
Se puede acceder con indices.

names[0];
months[5];
se puede usar la prop length
se puede usar el method push
Supongo que todos los de Array. Buscar en MDN. */


// Explicito
let users: string[];
users = ['digcakes', 'paparazzi', 'lensqueen'];
// users = [1, true, 'test']; // --> Error

// Inferido
let otherUsers = ['digcakes', 'paparazzi', 'lensqueen'];
// otherUsers = [1, true, 'test']; // --> Error

// Array<tipoDato>
let pictureTitles: Array<string>; // <> se conoce como generico
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];

// Accediendo a los valores en un Array
console.log('first user : ', users[0]); // --> users[indice]: luixaviles
console.log('first title : ', pictureTitles[0]);

// Propiedades en Array
console.log('users.length : ', users.length); // -> Tamaño del Array

// Uso de funciones en Arrays
users.push('aPlatziUser');  // -> agrega dato a la cola del Array
users.sort();   // --> ordena el Array de menor a mayor (alfabetica)
console.log('users', users);