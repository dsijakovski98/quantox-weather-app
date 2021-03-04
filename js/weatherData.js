const getWeatherData = () => {
    const weatherData = {
        tempUnit: 'C',
        windSpeedUnit: 'm/s',
        days: [
            { day: 'Mon', temp: 22, windDirection: 'north-east', windSpeed: 10 , type:'sunny' },
            { day: 'Tue', temp: 14, windDirection: 'north-west', windSpeed: 14, type: 'rainy' },
            { day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'windy' },
            { day: 'Thu', temp: 21, windDirection: 'north-east', windSpeed: 12, type: 'sunny' },
            { day: 'Fri', temp: 11, windDirection: 'south-east', windSpeed: 20, type: 'rainy' },
            { day: 'Sat', temp: 30, windDirection: 'north-west', windSpeed: 24, type: 'cloudy' },
            { day: 'Sun', temp: 32, windDirection: 'south-east', windSpeed: 20, type: 'sunny' },
            { day: 'Mon', temp: 28, windDirection: 'south-west', windSpeed: 21, type: 'windy' },
            { day: 'Tue', temp: 25, windDirection: 'north', windSpeed: 15, type: 'cloudy' },
            { day: 'Fri', temp: 11, windDirection: 'east', windSpeed: 30, type: 'rainy' },
            { day: 'Sat', temp: 30, windDirection: 'south', windSpeed: 20, type: 'windy' },
            { day: 'Sun', temp: 32, windDirection: 'west', windSpeed: 10, type: 'rainy' },
            { day: 'Tue', temp: 25, windDirection: 'north', windSpeed: 15, type: 'cloudy' },
            { day: 'Fri', temp: 11, windDirection: 'east', windSpeed: 30, type: 'rainy' },
            { day: 'Sat', temp: 30, windDirection: 'south', windSpeed: 20, type: 'windy' },
            { day: 'Sun', temp: 32, windDirection: 'west', windSpeed: 10, type: 'rainy' },
            
        ]
    };

    return weatherData;
}