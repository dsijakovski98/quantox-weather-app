const getWeatherData = () => {
    const weatherData = {
        tempUnit: 'C',
        windSpeedUnit: 'm/s',
        days: [
            { day: 'Mon', temp: 22, windDirection: 'north-east', windSpeed: 10 , type:'sunny' },
            { day: 'Tue', temp: 14, windDirection: 'north-west', windSpeed: 14, type: 'rainy' },
            { day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            { day: 'Thu', temp: 21, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            { day: 'Fri', temp: 11, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            { day: 'Sat', temp: 30, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            { day: 'Sun', temp: 32, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            { day: 'Mon', temp: 28, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            { day: 'Tue', temp: 25, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            { day: 'Fri', temp: 11, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            { day: 'Sat', temp: 30, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            { day: 'Sun', temp: 32, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            
        ]
    };

    return weatherData;
}