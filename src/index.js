const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = []
  for (let i = 0; i < expr.length / 10; i++) {
    let numbers = expr.slice(i * 10, i * 10 + 10)
    arr[i] = ''
    for (let j = 0; j < 5; j++) {
      switch (numbers.slice(j * 2, j * 2 + 2)) {
        case "00" :
          break;
        case "**" :
          arr[i] = ' ';
          break;
        case "10" :
          arr[i] += '.';
          break;
        case "11":
          arr[i] += '-';
      }
    }
    arr[i] = MORSE_TABLE[arr[i]] || ' '
  }
  return arr.join('')
}

module.exports = {
    decode
}