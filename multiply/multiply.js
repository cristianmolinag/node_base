// @ts-check
const fs = require('fs');

let createFile = (base) => {
    return new Promise((resolve, reject) => {

        if( !Number(base)){
            reject(`${base} isn't a valud number`);
            return;
        }
        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`files/table-${base}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`table-${base}`);
        });
    });
}
module.exports = {
    createFile
}