
module.exports = capitalizeText;

function capitalizeText(text) {
    return text.replace(/\S+/g, capitalizeWord);
}

function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
