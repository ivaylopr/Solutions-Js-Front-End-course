function solve(a, b) {
    let result = [];
    let firstCharToNum = a.charCodeAt(0);
    let secondCharToNum = b.charCodeAt(0);
    let firstValue=0;
    let secondValue = 0;
    if (firstCharToNum>secondCharToNum) {
        firstValue=secondCharToNum+1;
        secondValue=firstCharToNum;
    } else{
        firstValue=firstCharToNum+1;
        secondValue = secondCharToNum;
    }
    for (let i = firstValue; i < secondValue; i++) {
        result.push(String.fromCharCode(i));
    }
    console.log(result.join(' '));
}

solve('C', '#');
