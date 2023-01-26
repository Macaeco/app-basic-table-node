
const fs = require('fs');
const colors = require('colors');



const crearArchivo = async (base = 5, listar = false, limite = 10) => {
    try {


        let salida = ''


        for (let i = 0; i <= limite; i++) {
            salida += `${base} x  ${i} =${base * i}\n`;
        }

        if (listar) {
            console.log('=========================='.bgCyan.black)
            console.log('tabla del'.bgCyan, colors.black(base).bgCyan)
            console.log('=========================='.bgCyan.black)
            console.log(salida.bgYellow.black);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        // console.log(`tabla-${base}.txt creada`);
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error
    }



}

module.exports = {
    crearArchivo
}