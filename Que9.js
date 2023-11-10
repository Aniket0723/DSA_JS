//Que 9 Find the sum of digits of Number
function sumDigits(n) {
    let sum = 0;
    while (n) {
        digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    return sum;
}
console.log(sumDigits(1234))

