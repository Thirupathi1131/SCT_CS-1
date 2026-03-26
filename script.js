function encrypt() {
    let text = document.getElementById("message").value;
    let shift = parseInt(document.getElementById("shift").value);

    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } 
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }

        result += char;
    }

    document.getElementById("result").innerText = "Encrypted: " + result;
}

function decrypt() {
    let text = document.getElementById("message").value;
    let shift = parseInt(document.getElementById("shift").value);

    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
            } 
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
            }
        }

        result += char;
    }

    document.getElementById("result").innerText = "Decrypted: " + result;
}