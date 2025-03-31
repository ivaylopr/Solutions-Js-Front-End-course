function vacation (peopleNumber, type, day){
    let totalPrice;
    switch (day){
        case 'Friday':{
            switch (type){
                case 'Students':{
                    const price = 8.45;
                    totalPrice=peopleNumber*price;
                    if (peopleNumber>=30) {
                        totalPrice-=totalPrice*0.15;
                    }
                    break;
                }case 'Business':{
                    const price = 10.9;
                    totalPrice ;
                    if (peopleNumber>=100) {
                        totalPrice = (peopleNumber-10)*price;
                    } else{
                        totalPrice=peopleNumber*price;
                    }
                     
                    break;
                }case 'Regular':{
                    const price = 15;
                    totalPrice=peopleNumber*price;
                    if (peopleNumber>=10 && peopleNumber<=20) {
                        totalPrice-=totalPrice*0.05;
                    }
                }
            }
            break;
        } case 'Saturday':{
            switch (type){
                case 'Students':{
                    const price = 9.8;
                    totalPrice=peopleNumber*price;
                    if (peopleNumber>=30) {
                        totalPrice-=totalPrice*0.15;
                    }
                    break;
                }case 'Business':{
                    const price = 15.6;
                    totalPrice ;
                    if (peopleNumber>=100) {
                        totalPrice = (peopleNumber-10)*price;
                    } else{
                        totalPrice=peopleNumber*price;
                    }
                     
                    break;
                }case 'Regular':{
                    const price = 20;
                    totalPrice=peopleNumber*price;
                    if (peopleNumber>=10 && peopleNumber<=20) {
                        totalPrice-=totalPrice*0.05;
                    }
                    break;
                }
            }
            break;
        }case 'Sunday':{
            switch (type){
                case 'Students':{
                    const price = 10.46;
                    totalPrice=peopleNumber*price;
                    if (peopleNumber>=30) {
                        totalPrice-=totalPrice*0.15;
                    }
                    break;
                }case 'Business':{
                    const price = 16;
                    totalPrice ;
                    if (peopleNumber>=100) {
                        totalPrice = (peopleNumber-10)*price;
                    } else{
                        totalPrice=peopleNumber*price;
                    }
                     
                    break;
                }case 'Regular':{
                    const price = 22.5;
                    totalPrice=peopleNumber*price;
                    if (peopleNumber>=10 && peopleNumber<=20) {
                        totalPrice-=totalPrice*0.05;
                    }
                    break;
                }
            }
            break;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}
vacation(40,'Regular','Saturday');
