const persona = {
    nombre: 'Uriel',
    apellido: 'Diaz',
    edad: 45,
    direccion:{
        ciudad: 'tuxtla',
        zip:1414,
        lat:12.12,
        lng:34.54
    }
};


//console.table(persona);
const persona2 = {...persona};
persona2.nombre = 'Eliza';

console.log( persona );
console.log( persona2 );