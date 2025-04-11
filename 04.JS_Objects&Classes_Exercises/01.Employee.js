function employeesNumber(input){
    const employeesList = [];
    input.forEach(empl => {
        employeesList.push({name:empl, personalNumber:empl.length});
    });

    employeesList.forEach(empl=>{
        console.log(`Name: ${empl.name} -- Personal Number: ${empl.personalNumber}`);
    })
}
