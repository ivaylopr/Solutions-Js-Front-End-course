function passValidator(password) {
    const errorMessages = [];
    function lengthValidator(x){
        if (x.length<6 || x.length>10) {
            return false;
        } else {
            return true;
        }
    }
    function charsAndDigitsValidator(x){
        const pattern= /^[A-Za-z0-9]+$/;
        return pattern.test(x)
    }
    function atLeastTwoDigits(x){
        return x.match(/\d/g)?.length >= 2;
    }
    if (lengthValidator(password)===false) {
        errorMessages.push('Password must be between 6 and 10 characters');
    }
    if (charsAndDigitsValidator(password)===false) {
        errorMessages.push('Password must consist only of letters and digits')
    }
    if (atLeastTwoDigits(password)===false) {
        errorMessages.push('Password must have at least 2 digits')
    }
    if (errorMessages.length===0) {
        console.log('Password is valid');
    } else{
        errorMessages.forEach(error=>{
            console.log(error);
    });
    }
}

passValidator('logIn');
