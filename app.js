// @ts-check

const { createFile } = require("./multiply/multiply");

let argv = process.argv;
let param = argv[2];
let base = param.split('=')[1];

createFile(base)
    .then(file => console.log(`File created: ${file}`))
    .catch(err => console.log(err));