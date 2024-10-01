function rot13(str) {
    let Str = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] < 'A' || str[i] > 'Z') {
            Str += str[i];
            continue;
        }
        var n = str[i].charCodeAt() - 'A'.charCodeAt();
        n = (n + 13) % 26;
        Str += String.fromCharCode(n + 'A'.charCodeAt());
    }
    return Str;
}