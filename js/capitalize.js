const fs = require('fs');
const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    writeToFileInCaps(data);
});

exports.capitalize = capitalizeText;

async function writeToFileInCaps(text) {
    const [ext] = fileName.split('.').slice(-1);
    const name = fileName.split('.').slice(0, -1).join(".");
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
