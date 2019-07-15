const fs = require('fs');
const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    writeToFileInCaps(data);
});


async function writeToFileInCaps(text) {
    const [name, ext] = fileName.split('.');
    const outName = process.argv[3] || `${name}-capitalized.${ext}`; 

    fs.writeFile(outName, capitalizeText(text), 'utf8', err => {
        if (err) throw err;
        console.log('Capitalized version written!');
    });
}

function capitalizeText(text) {
    return text.replace(/\S+/g, capitalizeWord);
}

function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
