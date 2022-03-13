const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');


console.clear();

crearArchivo(argv.b, argv.l, argv.h)
   .then((res)=>{console.log(res, 'creado')})
   .catch((err)=>{console.log(err)})
