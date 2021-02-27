//desestructurion de arreglos

const personajes = ['goku', 'vegeta', 'trunks'];
const [ , ,p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras,numeros);

//tarea
//1. El primer valor del arreglo se llamara nombre
//2. El segundo valor se llamara setNombre

const useState = ( valor ) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, getNombre] = useState('Uriel');

console.log(nombre,);
getNombre();
