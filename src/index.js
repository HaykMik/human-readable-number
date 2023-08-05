module.exports = function toReadable(number) {
    let converter = require('number-to-words');
    converter = converter.toWords(number);
    return converter.replace(/-/g, ' ');
}
