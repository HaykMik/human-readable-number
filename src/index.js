module.exports = function toReadable(number) {

    const numToWords = (number) => {

        if (number < 10) {
            switch (number) {
                case 0: return "zero";
                case 1: return "one";
                case 2: return "two";
                case 3: return "three";
                case 4: return "four";
                case 5: return "five";
                case 6: return "six";
                case 7: return "seven";
                case 8: return "eight";
                case 9: return "nine";
            }
        } else {
            switch (number) {
                case 10: return "ten";
                case 11: return "eleven";
                case 12: return "twelve";
                case 13: return "thirteen";
                case 14: return "fourteen";
                case 15: return "fifteen";
                case 16: return "sixteen";
                case 17: return "seventeen";
                case 18: return "eighteen";
                case 19: return "nineteen";
                case 20: return "twenty";
                case 30: return "thirty";
                case 40: return "forty";
                case 50: return "fifty";
                case 60: return "sixty";
                case 70: return "seventy";
                case 80: return "eighty";
                case 90: return "ninety";
            };
        }
    }

    let words = "";
    
    if (number == 0) {
        return numToWords(number);
    }
    
    if (number >= 100) {

        words += numToWords(Math.floor(number / 100)) + " hundred";

        number %= 100;
    } 

    if (number > 0 && number != ' ') {
        if (words !== "") words += " ";
    }
    if (number < 20 && number != 0) words += numToWords(number);
    else if (number != 0) {
        words += numToWords(Math.floor(number / 10) * 10);

        if (number % 10 > 0) {
            words += " " + numToWords(number % 10);
        }
    }

    return words;
}