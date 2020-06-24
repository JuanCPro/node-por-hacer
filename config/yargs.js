const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        default: true,
        aliar: 'c',
        desc: 'Marca como completado una tarea'
    }

}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actauliza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            default: true,
            aliar: 'c',
            desc: 'Marca como completado una tarea'
        }
    })
    .command('borrar', 'Borra una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'b',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}