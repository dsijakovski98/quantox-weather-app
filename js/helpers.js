// Helper functions
const temperatureFormat = (temperature, unit) => {
    
    // Add ° if tempUnit is Celsius
    return (
        unit === 'C'
        ?   temperature + ' °C'
        :   temperature
    );
}