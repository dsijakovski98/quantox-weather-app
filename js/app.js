// Getting weather data - function is in weatherData.js
let { days, tempUnit, windSpeedUnit } = getWeatherData();

// Initial setup
let selectedDay = null;

// These two will serve as the previous unit holders
let initialTempUnit = tempUnit;
let initialWindSpeedUnit = windSpeedUnit;

const updateWeatherWidget = (updateUnits = true) => {
    weatherWidget.innerHTML = '';

    if(selectedDay == null) {
        const noDaycomponent = createNoDayComponent();
        weatherWidget.appendChild(noDaycomponent);
    }
    else {
        // TODO: Create weather widget component
        const {widgetDay, dayName, dayType, dayTemp, windSpeed, arrowImg, windDir} = createWidgetDayComponent();
        
        // Set day name
        dayName.textContent = translateDayName(selectedDay.day);

        // TODO: Set corresponding weather picture (dayType)
        dayType.src = `/assets/icons/${selectedDay.type}.svg`;

        // Set formated temperature
        const { temperatureText, temp } = temperatureFormat(selectedDay.temp, tempUnit, initialTempUnit, updateUnits);
        dayTemp.textContent = temperatureText;
        selectedDay.temp = temp;

        // Set wind speed
        const { windSpeedText, speed } = windSpeedFormat(selectedDay.windSpeed, windSpeedUnit, initialWindSpeedUnit, updateUnits);
        windSpeed.textContent = windSpeedText;
        selectedDay.windSpeed = speed;

        // TODO: Rotate and scale the wind image according to the wind direction
        const scaleDirection = scaleWindPicture(selectedDay.windDirection);
        const rotateDegrees = rotateWindPicture(selectedDay.windDirection);
        arrowImg.style.transform = `scaleX(${scaleDirection}) rotate(${rotateDegrees}deg)`;


        // Set wind direction
        windDir.textContent = selectedDay.windDirection.toUpperCase();

        weatherWidget.appendChild(widgetDay);
    }
}

const updateWeatherList = () => {
    weatherList.innerHTML = '';

    days.forEach(day => {
        // Create a day component
        const { weatherDay, dayName, dayTemp } = createWeatherDayComponent();

        // Add click listener to update the widget
        weatherDay.addEventListener('click', () => {
            selectedDay = day;
            updateWeatherWidget(false);
        });

        // Fill in the contents of the day
        dayName.textContent = day.day;
        const { temperatureText, temp } = temperatureFormat(day.temp, tempUnit, initialTempUnit);
        dayTemp.textContent = temperatureText;
        day.temp = temp;


    
        weatherList.appendChild(weatherDay);
    });
}

const convertTemperatureUnit = (unit) => {
    initialTempUnit = tempUnit;
    tempUnit = unit;
    updateWeatherList();
    updateWeatherWidget(false);
}

const convertWindSpeedUnit = (unit) => {
    initialWindSpeedUnit = windSpeedUnit;
    windSpeedUnit = unit;
    updateWeatherWidget(false);
}

// Get weather days list
const weatherList = document.querySelector('.weather-list-container');
updateWeatherList();

// Get weather widget
const weatherWidget = document.querySelector('.weather-widget-container');
updateWeatherWidget();


// Converting units

const celsiusRadio = document.querySelector('#celsius');
celsiusRadio.addEventListener('change', (e) => convertTemperatureUnit(e.target.value))

const kelvinRadio = document.querySelector('#kelvin');
kelvinRadio.addEventListener('change', (e) => convertTemperatureUnit(e.target.value));

const metersPerSecondRadio = document.querySelector('#ms');
metersPerSecondRadio.addEventListener('change', (e) => convertWindSpeedUnit(e.target.value));

const kilometersPerHourRadio = document.querySelector('#kmh');
kilometersPerHourRadio.addEventListener('change', (e) => convertWindSpeedUnit(e.target.value));