const apiKey = '9e1082e983b74582a7a165955252101';
const apiUrl = 'http://api.weatherapi.com/v1/current.json';

function getWeather() {
    const location = document.getElementById('locationInput').value;
    const url = `${apiUrl}?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('Location not found, please try again.');
                return;
            }

            const locationName = data.location.name;
            const temperature = data.current.temp_c;
            const condition = data.current.condition.text;
            const airQuality = data.current.air_quality.pm2_5;

            document.getElementById('locationName').textContent = `${locationName}, ${data.location.country}`;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('weatherCondition').textContent = `Condition: ${condition}`;
            document.getElementById('airQuality').textContent = `Air Quality (PM2.5): ${airQuality} µg/m³`;

            document.getElementById('weatherDetails').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred, please try again.');
        });
}
