const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (number = 5, listar = false, hasta=10) => {
  try {
    let salida = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `\t${i}*${number}=${i * number}\n`;
    }
    if(listar){
      console.log("*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*".red);
    console.log(`\tTabla del numero ${number}`.green);
    console.log("*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*".red);
    console.log(salida.rainbow);
    }

    fs.writeFileSync(`./salida/tabla-${number}.txt`, salida);
    return `tabla-${number}.txt`.green;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo: crearArchivo
};
