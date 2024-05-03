const prompt = require("prompt-sync")({sigint:true});
setHour = prompt("Establesca la hora >> ");

function updateClock() {
    
    const hour = new Date();

    hour.setHours(set);
    hour.setMinutes(0);
    
    const hours = String(hour.getHours()).padStart(2, '0');
    const minutes = String(hour.getMinutes()).padStart(2, '0');
    const seconds = String(hour.getSeconds()).padStart(2, '0');

    console.log(hours + ':' + minutes + ':' + seconds);
}

setInterval(updateClock, 1000);

updateClock();
