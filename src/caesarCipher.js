function charToInt(char) {
    return char.charCodeAt(0)
}

function intToChar(code) {
    return String.fromCharCode(code);
}

export function caesarCipher(str, shift) {
    const oldArr = str.split("")
    const regex = /[A-Za-z]/;
    const newCodes = oldArr.map(char => 
    regex.test(char) ? charToInt(char) + shift : charToInt(char)
    )
    const newArr = newCodes.map(code => intToChar(code))
    const res = newArr.join("")
    return res;
}