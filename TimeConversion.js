function timeConversion(s) {
    // Write your code here
    let [hour, min, sec] = s.split(':');
    hour = Number(hour);
    
    let timeFrame = sec.slice(-2);
    sec = sec.slice(0, -2);
    
    if(timeFrame === 'AM' && hour >= 12){
        hour -= 12;
        hour = `0${hour}`;
    }else if(timeFrame === 'PM' && hour < 12){
        hour += 12
    }
    
    return `${hour}:${min}:${sec}`
}
