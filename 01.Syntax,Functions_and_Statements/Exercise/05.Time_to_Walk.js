function calculateTimeWalking(steps, lengthFootprint, speed) {
    let distanceInMeters = steps * lengthFootprint;
    let speedInSeconds = speed / 3.6;

    let time = distanceInMeters / speedInSeconds;
    let restTimeInMin = Math.floor(distanceInMeters / 500);

    let timeInMin = Math.floor(time / 60);
    let timeInSec = Math.ceil(time - (timeInMin * 60));
    let timeInHours = Math.floor(time / 3600);
   
    timeInMin += restTimeInMin;
    timeInHours += Math.floor(timeInMin / 60);
    timeInMin = timeInMin % 60;
    
    console.log((timeInHours < 10 ? '0' : '') + timeInHours + ':' 
    + (timeInMin < 10 ? '0' : '') + timeInMin + ':' + (timeInSec < 10 ? '0' : '') + timeInSec)
    
}

calculateTimeWalking(4000, 0.60, 5);
calculateTimeWalking(2564, 0.70, 5.5);