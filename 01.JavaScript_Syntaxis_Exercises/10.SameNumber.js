function sameNumber(n){
    let sum=0;
    let isTheSame = true;
    let digitToCheck = n%10;
    while (n>0) {
        const numberToAdd= n%10;
        sum+=numberToAdd;
        n = Math.floor(n / 10);
        if (isTheSame) {
            if (digitToCheck===numberToAdd) {
                isTheSame=true;
            } else{
                isTheSame=false;
            }
        }
        
    }
    console.log(`${isTheSame}`);
    
    console.log(`${sum}`);
}

sameNumber(322223);
