const createNoDayComponent = () => {
    const noDay = document.createElement('div');
    noDay.className = 'widget-noday-container';

    const sun = document.createElement('img');
    sun.src = '/assets/icons/sun.svg';
    sun.className = 'widget-sun';

    const text = document.createElement('h2');
    text.textContent = 'No day selected';

    noDay.appendChild(sun);
    noDay.appendChild(text);
    // noDay.appendChild(helperText);    

    return noDay;
}

const createWidgetDayComponent = () => {
    const widgetDay = document.createElement('div');
    widgetDay.className = 'widget-day-container';

    // Create title section
    const widgetDayTitle = document.createElement('div');
    widgetDayTitle.className = "widget-day-title";
    
    const dayName = document.createElement('h1');
    dayName.textContent = 'Day'; // placeholder text
    const dayType = document.createElement('img');
    dayType.src = '/assets/icons/sunny.svg'; // placeholder image

    widgetDayTitle.appendChild(dayName);
    widgetDayTitle.appendChild(dayType);


    // Create separator
    const widgetSeparator = document.createElement('div');
    widgetSeparator.className = 'widget-separator';


    // Create temperature section
    const widgetDayTemperature = document.createElement('div');
    widgetDayTemperature.className = 'widget-day-temperature';

    const dayTemp = document.createElement('h2');
    dayTemp.textContent = 'Temp'; // placeholder text

    const tempImg = document.createElement('img');
    tempImg.src = '/assets/icons/thermometer.svg';

    widgetDayTemperature.appendChild(dayTemp);
    widgetDayTemperature.appendChild(tempImg);


    // Create wind section
    const widgetDayWind = document.createElement('div');
    widgetDayWind.className = 'widget-day-wind';

    const windSpeed = document.createElement('h2');
    windSpeed.textContent = 'Speed'; // placeholder text

    const windContainer = document.createElement('div');

    const arrowImg = document.createElement('img');
    arrowImg.src = '/assets/icons/arrow.svg';

    const windDir = document.createElement('h4');
    windDir.textContent = 'Direction'; // placeholder text

    windContainer.appendChild(arrowImg);
    windContainer.appendChild(windDir);

    widgetDayWind.appendChild(windSpeed);
    widgetDayWind.appendChild(windContainer);

    
    widgetDay.appendChild(widgetDayTitle);
    widgetDay.appendChild(widgetSeparator);
    widgetDay.appendChild(widgetDayTemperature);
    widgetDay.appendChild(widgetDayWind);


    return { widgetDay, dayName, dayType, dayTemp, windSpeed, arrowImg, windDir };
}

const createWeatherDayComponent = () => {
    const weatherDay = document.createElement('div');
    weatherDay.className = 'weather-day-container';

    // Create weather day info
    const weatherDayInfo = document.createElement('div');
    weatherDayInfo.className = 'weather-day-info';

    const dayName = document.createElement('h1');
    dayName.textContent = 'Mon';

    const dayTemp = document.createElement('h3');
    dayTemp.textContent = '20 °C';

    weatherDayInfo.appendChild(dayName);
    weatherDayInfo.appendChild(dayTemp);

    // Create right-facing arrow
    const weatherDayArrow = document.createElement('div');
    weatherDayArrow.className = 'weather-day-arrow';
    weatherDayArrow.textContent = '>';

    // Append info and arrow to day component
    weatherDay.appendChild(weatherDayInfo);
    weatherDay.appendChild(weatherDayArrow);

    return {weatherDay, dayName, dayTemp};
}