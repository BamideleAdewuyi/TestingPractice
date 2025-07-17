export function caesarCipher(string, shift) {
    let code = [];
    const letters = new RegExp(/[a-zA-Z]/, "i")
    for (let i = 0; i < string.length; i++) {
        const newCharCode = letters.test(string[i]) ? string.charCodeAt(i) + shift : string.charCodeAt(i);
        newCharCode < 122 ? code.push(newCharCode) : code.push(newCharCode - 26);
    }
    let cipher = code.map((x) => String.fromCharCode(x)).join("")
    return cipher;
};