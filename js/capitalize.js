const fs = require('fs');
const fileName = process.argv[2];
const outName = process.argv[3];

fs.readFile(fileName, 'utf8', (err, data) => {
   if (err) throw err;
    writeToFileInCaps(data);
});


async function writeToFileInCaps(text) {
    const 
    const [name, ext] = fileName.split('.');
    fs.writeFile(`${name}-capitalized.${ext}`, text.toUpperCase(), 'utf8', err => {
        if (err) throw err;
        console.log('Capitalized version written!');
    });
}
