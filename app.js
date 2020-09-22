// const { crearArchivo } = require('./multiplicar/miltiplicar');
// // requires
// // const fs = require('fs'); //libreria propia de node
// // const fs = require('express'); //paquete que se instala, no son nativos de node
// // const fs = require('./fs'); //archivos propios

// // let data = ''; //Esta variable la vamos a utilizar para guardar la informacion de la tabla de multiplicacion que creamos

// // for (let i = 1; i <= 10; i++) {
// //     data += `${base} * ${i} = ${base * i}\n`; //Aca podemos ver como concadenamos con += a data y la informacion que es la que queremos guardar
// //     // Con \n hacemos un salto de renglon (un enter)
// // }

// // fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => { //El primer parametro es el archivo que queremos crear, el segundo es la informacion que queremos que vaya al archivo

// //     if (err) throw err;

// //     console.log(`El archivo tabla-${base}.txt ha sido creado`);
// // })

// const { crearArchivo } = require('./multiplicar/miltiplicar');

// // let base = '3';

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1] //El split convierte un string en un array

// console.log(base);
// console.log(process.argv);


// // crearArchivo(base)
// //     .then(archivo => console.log(`Archivo creado ${archivo}`))
// //     .catch(e => console.log(e));

// Arriba hay algunas cosas que estan bien explicadas pero el ejercicio mal, asi que lo re hare de aca en adelante
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/miltiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

// let base = '4.232134';

// let argv2 = process.argv;
// let param = argv[2];
// let base = param.split('=')[1]

// console.log('Limite:', argv.limite);

// console.log(process.argv);