function factorialDivision(a, b) {
    function factorial(x) {
        let result = 1;
        for (let i = 1; i <= x; i++) {
            result *= i;
        }
        return result;
    }
    const result = factorial(a) / factorial(b);
    console.log(result.toFixed(2));
}

factorialDivision(5,2)

