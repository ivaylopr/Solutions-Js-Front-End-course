function solve(fi, se, tr) {
    let multiply = (a, b) => a * b;
    if ((multiply(fi, se) >= 0 && tr >= 0) || (multiply(fi, se) < 0 && tr < 0)) {
        console.log('Positive');
    } else{
        console.log('Negative');
    }
}
