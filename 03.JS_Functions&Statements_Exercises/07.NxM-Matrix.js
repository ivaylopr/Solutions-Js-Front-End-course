function matrixPrint(number){
    for (let i = 0; i < number; i++) {
        let row = new Array(number).fill(number);
        console.log(row.join(' '));
    }
}

matrixPrint(3);
