const fs = require('fs');
const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    writeToFileInCaps(data);
});


async function writeToFileInCaps(text) {
    const [name, ext] = fileName.split('.');
    const outName = process.argv[3] || `${name}-capitalized.${ext}`; 

    fs.writeFile(outName, text.toUpperCase(), 'utf8', err => {
        if (err) throw err;
        console.log('Capitalized version written!');
    });
}
