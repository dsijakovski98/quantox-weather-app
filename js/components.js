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

    return noDay;
}

const createWidgetDayComponent = () => {
    const day = document.createElement('h1');
    day.textContent = "Day";
    return day;
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