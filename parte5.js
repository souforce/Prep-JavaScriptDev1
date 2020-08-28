const fs = require('fs'); //File System
const path = require('path'); //Modulo de manipulação de caminhos/Paths
const dir = path.join(__dirname, 'arquivos');

async function main() {
    // console.log(__filename);
    // console.log(__dirname);
    // console.log(dir);

    // console.log(1);
    // fs.readdir(dir, function(err, files) {
    //     console.log(2);
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         files.forEach(function(fileName) {
    //             console.log(fileName);
    //         });
    //     }
    // });
    // console.log(3);

    //Promise - Promessa de que algo vai acontecer!?


    //setTimeout
    //setInterval

    // setTimeout(function() {
    //     console.log('Acabou o tempo');
    // }, 2000);

    // setInterval(function() {
    //     console.log('Já se passou 1 segundo');
    // }, 1000);


    function readDir() {
        return new Promise((resolve, reject) => {
            fs.readdir(dir, (err, files) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(files);
                }
            });
        });
    }

    // readDir().then(function(files) {
    //     files.forEach(function(fileName) {
    //         console.log(fileName);
    //     });
    // }).catch(function(error) {
    //     console.error(error);
    // });

    // Mostra Loading
    readDir().then(files => {
        //Esconde o Loading
        files.forEach(fileName => {
            console.log(fileName);
        });
    }).catch(error => {
        //Esconde o Loading
        console.error(error);
    });

    // async await 
    // Assistir a live de número # 251

    try {
        console.log(1);
        const files = await readDir();
        files.forEach(fileName => {
            console.log(fileName);

            //TODO: Carregar o conteudo do arquivo
            //fs.readFile()
        });
        
        console.log(2);
    } catch (error) {
        console.error(error);
    };

}
main();