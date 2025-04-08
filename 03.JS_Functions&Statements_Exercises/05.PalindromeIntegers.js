function isNumberPalindrome(numbersArr) {
    function determinatePalindrome(number) {
        const reversedNumber = Number(number.toString().split('').reverse().join(''));
        return number === reversedNumber;
    }
    numbersArr.forEach(element => {
        console.log(determinatePalindrome(element));
    });
}


isNumberPalindrome([123, 323, 421, 121]);
