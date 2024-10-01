function palindrome(str) {
    str = str.toUpperCase();
    console.log(str);

    let Str = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') Str = Str + str[i];
        if (str[i] >= '0' && str[i] <= '9') Str = Str + str[i];
    }

    for (let i = 0; i <= Str.length / 2; i++) {
        if (Str[i] != Str[Str.length - i - 1]) return false;
    }

    return true;
}