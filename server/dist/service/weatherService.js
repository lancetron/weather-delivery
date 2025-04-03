import dotenv from 'dotenv';
dotenv.config();
// Define a class for the Weather object
class Weather {
    constructor(temperature, humidity, description) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.description = description;
    }
}
class WeatherService {
    constructor() {
        this.baseURL = 'https://api.openweathermap.org/data/2.5';
        this.geocodeURL = 'https://api.openweathermap.org/geo/1.0/direct';
        this.apiKey = process.env.WEATHER_API_KEY || ''; // Ensure the API key is set in your .env file
    }
    // Fetch location data using the city name
    async fetchLocationData(city) {
        const query = this.buildGeocodeQuery(city);
        const response = await fetch(query);
        if (!response.ok) {
            throw new Error('Failed to fetch location data');
        }
        const data = await response.json();
        if (!data.length) {
            throw new Error('City not found');
        }
        return this.destructureLocationData(data[0]);
    }
    // Extract latitude and longitude from location data
    destructureLocationData(locationData) {
        return {
            latitude: locationData.lat,
            longitude: locationData.lon,
        };
    }
    // Build the geocode query URL
    buildGeocodeQuery(city) {
        return `${this.geocodeURL}?q=${encodeURIComponent(city)}&limit=1&appid=${this.apiKey}`;
    }
    // Build the weather query URL
    buildWeatherQuery(coordinates) {
        return `${this.baseURL}/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${this.apiKey}&units=metric`;
    }
    // Fetch weather data using coordinates
    async fetchWeatherData(coordinates) {
        const query = this.buildWeatherQuery(coordinates);
        const response = await fetch(query);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        return await response.json();
    }
    // Parse the weather data into a Weather object
    parseCurrentWeather(data) {
        return new Weather(data.main.temp, data.main.humidity, data.weather[0].description);
    }
    // Public method to get weather by city name
    async getWeatherByCity(city) {
        const coordinates = await this.fetchLocationData(city);
        const weatherData = await this.fetchWeatherData(coordinates);
        return this.parseCurrentWeather(weatherData);
    }
}
export default new WeatherService();
