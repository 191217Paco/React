//Desestructuracion
//Asignacion desestructurante

const persona = {
    nombre : 'Tony',
    edad: 45,
    clave:'Iroman',
}

//const { nombre, edad, clave} = persona

//console.log( persona.nombre);
//console.log( persona.edad);
//console.log( persona.clave);

//console.log( nombre);
//console.log( edad );
//console.log( clave );


const use = ({nombre, edad, clave, rango ='soldado'}) =>{
    //console.log( nombre);
    //console.log( edad );
    //console.log( clave );
    //console.log( rango );

    return {
        nombreClave: clave,
        anios: edad,
        coordenadas:{
            lat: 14.23423,
            lng: -12.12312
        } 
    }
}

const {nombreClave, anios, coordenadas:{lat, lng} } = use( persona );
console.log(nombreClave, anios);
console.log(lat, lng);