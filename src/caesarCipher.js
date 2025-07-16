export function caesarCipher(string, shift) {
    let code = [];
    for (let i = 0; i < string.length; i++) {
        code.push(i+97+shift)
    }
    let cipher = code.map((x) => String.fromCharCode(x)).join("")
    return cipher;
};