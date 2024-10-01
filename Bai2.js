function convertToRoman(num) {
    const normalNum = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const romanNum = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let NUM = "";
    while (num > 0) {
        let x = 12;
        while (normalNum[x] > num) {
            x--;
        }
        NUM += romanNum[x];
        num -= normalNum[x];
    }
    return NUM;
}

convertToRoman(36);