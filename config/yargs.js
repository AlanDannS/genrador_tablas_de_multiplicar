const argv = require('yargs')
   .options({'b': {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'La base de la tabla a multiplicar'
   },
   'l':{
      alias:'listar',
      type:'boolean',
      default: false,
      demandOption: true,
      describe: 'Muestra la tabla en consola'
   },
   'h':{
       alias: 'hasta',
       type:'number',
       describe: 'Hasta donde multiplica la tabla'
   }
})
   .check((argv, options) => {
      if (isNaN(argv.b)) {
         throw 'La base debe ser un numero';
      }

      return true;
   }).argv;

   module.exports = argv;