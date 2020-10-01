const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
};

module.exports = function toReadable (number) {
    if (number < 100) {
        if (numbers.hasOwnProperty(number)) {
            return numbers[number];
        } else {
            return `${numbers[number - number % 10]} ${numbers[number%10]}`;
        }
    } else {
        const hundr = Math.trunc(number / 100)
        const dozen = number % 100;
        console.log(hundr, dozen);
        if (number % 100 === 0) {
            return `${numbers[hundr]} ${numbers[100]}`;
        } else if (numbers.hasOwnProperty(dozen)) {
            return `${numbers[hundr]} ${numbers[100]} ${numbers[dozen]}`;
        } else {
            const units = dozen % 10;
            return `${numbers[hundr]} ${numbers[100]} ${numbers[dozen - units]} ${numbers[units]}`;
        }
    }
}
