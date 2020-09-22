// const { rejects } = require('assert');
// const fs = require('fs');

// let data = ''; //Esta variable la vamos a utilizar para guardar la informacion de la tabla de multiplicacion que creamos

// module.exports.crearArchivo = (base) => {

//     return new Promise((res, rej) => {

//         if (!Number(base)) {
//             rejects(`El valor ingresado ${base} no es un numero`)
//             return;
//         }

//         let data = ''; //Esta variable la vamos a utilizar para guardar la informacion de la tabla de multiplicacion que creamos    

//         for (let i = 1; i <= 10; i++) {
//             data += `${base} * ${i} = ${base * i}\n`; //Aca podemos ver como concadenamos con += a data y la informacion que es la que queremos guardar
//             // Con \n hacemos un salto de renglon (un enter)
//         }

//         fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => { //El primer parametro es el archivo que queremos crear, el segundo es la informacion que queremos que vaya al archivo

//             if (err)
//                 rej(err)
//             else
//                 res(`tabla-${base}.txt`);

//             console.log(`El archivo tabla-${base}.txt ha sido creado`);
//         })

//     })

// }

// // module.exports={
// //     crearArchivo     Esto usariamos para exportar un archivo
// // }                    Esta forma es conveniente en el cason de que tuvieramos que importar muchas funciones

// Arriba hay algunas cosas que estan bien explicadas pero el ejercicio mal, asi que lo re hare de aca en adelante

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log(`================`.red);
    console.log(`Tabla de ${base}`.white);
    console.log(`================`.blue);

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} es = ${base * i}`);

    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((res, rej) => {

        if (!Number(base)) {
            rej(`El valor introducido ${base} no es un numero`)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                rej(err)
            else
                res(`tabla-${base}-al-${limite}.txt`.rainbow);
        })

    })
}

module.exports = ({
    crearArchivo,
    listarTabla
})