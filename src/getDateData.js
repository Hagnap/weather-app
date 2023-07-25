// Gets user's location and time/date data
let today = new Date();

function getDate() {
    let date = (today.getMonth()+1) + '-' +
                    (today.getDate()) + '-' +
                    (today.getFullYear()) + "\n";
    
    return date;
}

function getTime() {

    let mins = String(today.getMinutes());
    if(mins < 10) {
        mins = mins.padStart(2, '0')
    }

    return today.getHours() > 12 ? 
        (today.getHours()-12) + ':' + mins + " PM":
        today.getHours() + ':' + mins + " AM";
}

export {
    getDate,
    getTime
};