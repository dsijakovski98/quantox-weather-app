// Getting weather data - function is in weatherData.js
const { days, tempUnit, windSpeedUnit } = getWeatherData();
// Initial setup
let selectedDay = null;

const updateWeatherWidget = () => {
    weatherWidget.innerHTML = '';

    if(selectedDay == null) {
        const noDaycomponent = createNoDayComponent();
        weatherWidget.appendChild(noDaycomponent);
    }
    else {
        // TODO: Create weather widget component
        const day = createWidgetDayComponent();
        weatherWidget.appendChild(day);
    }
}

const updateWeatherList = () => {
    days.forEach(day => {
        // Create a day component
        const { weatherDay, dayName, dayTemp } = createWeatherDayComponent();

        // Add click listener to update the widget
        weatherDay.addEventListener('click', () => {
            selectedDay = day;
            updateWeatherWidget();
        });

        // Fill in the contents of the day
        dayName.textContent = day.day;
        const temperature = temperatureFormat(day.temp, tempUnit);
        dayTemp.textContent = temperature;
    
        weatherList.appendChild(weatherDay);
    });
}

// Get weather days list
const weatherList = document.querySelector('.weather-list-container');
updateWeatherList();

// Get weather widget
const weatherWidget = document.querySelector('.weather-widget-container');
updateWeatherWidget();