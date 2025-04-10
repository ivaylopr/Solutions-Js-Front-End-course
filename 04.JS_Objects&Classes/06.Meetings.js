function weekMeetings(input) {
    let scheduleInfo = {};
    for (const entry of input) {
        const [day, name] = entry.split(' ');
        if (scheduleInfo.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);

        } else {
            scheduleInfo[day] = name;
            console.log(`Scheduled for ${day}`);
            
        }
    }
    for (const day in scheduleInfo) {
        console.log(`${day} -> ${scheduleInfo[day]}`);
        
    }
}

weekMeetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])
