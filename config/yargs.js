const opts = { //Hacemos esto para poder optimizar el codigo. Irlo simplificando.
    base: {
        demand: true, // Demand: Es obligatorio.
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10 //Default: Por defecto.
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv

module.exports = {
    argv
}