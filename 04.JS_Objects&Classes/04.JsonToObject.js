function jsonToObj(firstName,lastName,hairColor){
    let info = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    };

    let result = JSON.stringify(info);
    console.log(result);
    
}
