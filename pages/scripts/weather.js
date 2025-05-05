const apiKey = "e05e08a8514f5d9daa315f64e51d4447"; // Replace with your OpenWeatherMap API key
let city = "Tel Aviv"; // Default city
// Add event listeners to radio buttons
document.querySelectorAll('input[name="city"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    city = document.querySelector('input[name="city"]:checked').value;
    fetchWeatherForCity(city);
  });
});

// Also fetch weather for the default selected city on page load
window.addEventListener("DOMContentLoaded", () => {
    city = document.querySelector('input[name="city"]:checked').value;
    fetchWeatherForCity(city);
  });

function fetchWeatherForCity(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      const weatherDiv = document.getElementById("weather");
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      weatherDiv.innerHTML = `
        
            <div class="card-body text-center">
              <h5 class="card-title mb-3">Weather in ${data.name}</h5>
              <img src="${iconUrl}" alt="${description}" class="weather-icon mb-2">
              <h1 class="display-5 mb-2">${temp}°C</h1>
              <p class="text-capitalize text-muted">${description}</p>
            </div>
        `;
    })
    .catch((error) => {
      document.getElementById("weather").innerHTML = `
          <div class="alert alert-danger" role="alert">
            Failed to load weather data.
          </div>
        `;
      console.error("Error fetching weather data:", error);
    });
}
