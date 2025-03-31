function printAndSum(n1,n2){
    let sum=0;
    let output = "";
    for (let i = n1; i <= n2; i++) {
        output+=i+" ";
        sum+=i;
    }
    console.log(`${output}`);
    console.log(`Sum: ${sum}`);
    
}
