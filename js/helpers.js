const temperatureFormat = (temperature, unit, previousUnit, updateTemperature = true) => {
    let temp = temperature;

    if(unit !== previousUnit && updateTemperature) {
        if(previousUnit === 'C') {
            // C -> K
            temp += 273.15; 
        }
        else {
            // K -> C
            temp -= 273.15;
        } 
    }

    // Add ° if tempUnit is Celsius
    const temperatureText = unit === 'C' ? `${temp} °C` : `${temp} K`;
    return { temperatureText, temp };
}

const windSpeedFormat = (windSpeed, unit, previousUnit, updateWindSpeed = true) => {
    let speed = windSpeed;

    if(unit !== previousUnit && updateWindSpeed) {
        if(previousUnit === 'm/s') {
            // m/s -> km/h
            speed /= 3.6;
        }
        else {
            // km/h -> m/s
            speed *= 3.6;
        }
    }

    // Format speed to 2 decimals
    const windSpeedText = `${speed.toFixed(2)} ${unit}`;
    return { windSpeedText, speed };
}

const translateDayName = (day) => {
    switch(day) {
        case 'Mon':
            return 'Monday';
        case 'Tue':
            return 'Tuesday';
        case 'Wed':
            return 'Wednesday';
        case 'Thu':
            return 'Thursday';
        case 'Fri':
            return 'Friday';
        case 'Sat':
            return 'Saturday';
        case 'Sun':
            return 'Sunday';
        default: return 'Invalid'
    }
}

const scaleWindPicture = (direction) => {
    return (
        direction.includes('west') ? -1 : 1
    );
}

const rotateWindPicture = (direction) => {
    switch(direction) {
        case 'north':
            return -90;
        case 'south':
            return 90;
        case 'north-east':
            return -45;
        case 'south-east':
            return 45;
        case 'north-west':
            return -45;
        case 'south-west':
            return 45;
        default: return 0;
    }
}