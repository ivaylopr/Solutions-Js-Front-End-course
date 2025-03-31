function sumDigits(n){
    let sum=0;
    while (n>0) {
        
        const numberToAdd= n%10;
        sum+=numberToAdd;
        n = Math.floor(n / 10);
    }
    console.log(`${sum}`);
    
}

sumDigits(245678);
