function solve(n,arr){
    let result= "";
    for (let i = n-1; i >= 0; i--) {
        result+=`${arr[i]} `;
    }
    console.log(result);
    
}

//fancy solution 
function solve(num,numbers){

    console.log(numbers.slice(0,num).reverse().join(" "));
    }
