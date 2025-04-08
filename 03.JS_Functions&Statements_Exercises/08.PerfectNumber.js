function isNumberPerfect(number) {
    function properPositiveDividors(x) {
        let sum = 0;
        for (let i = 1; i < x; i++) {
            if (x % i === 0) {
                sum += i;
            }
        }
        return sum;
    }
    if (properPositiveDividors(number) === number && number >= 0) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}

isNumberPerfect(6);
