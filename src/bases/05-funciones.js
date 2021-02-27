//Funciones en JS

const saludar = function( nombre ) {
    return `Hola, ${ nombre }`;
}

const saludar2 =  ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 =  ( nombre ) =>`Hola, ${ nombre }`
//console.log(saludar('Uriel') );

console.log( saludar('paco') );
console.log( saludar2('Eliza') );
console.log( saludar3('Uriel') );

//Tarea 
// 1. Transformar a una cuncio de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Ruebas

const siou = function getUsuarioActivo0( nombre ) {
    return{
        uid: 'ABC123',
        username: 'lol',
    }
};
console.log( siou );

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC123',
    username: 'lol',
})
console.log( getUsuarioActivo('uriel'));