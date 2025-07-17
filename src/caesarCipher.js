export function caesarCipher(string, shift) {
    let code = [];
    for (let i = 0; i < string.length; i++) {
        let newCharCode = string.charCodeAt(i) + shift
        newCharCode < 122 ? code.push(newCharCode) : code.push(newCharCode - 26)
    }
    let cipher = code.map((x) => String.fromCharCode(x)).join("")
    return cipher;
};