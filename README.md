Weather Dashboard for Travelers
Description
This weather dashboard allows travelers to quickly check the current and future weather conditions for multiple cities. It helps you plan your trips by providing accurate weather forecasts, including temperature, wind speed, humidity, and more.

Features
Search for cities: Look up current and future weather for any city.

City search history: Previously searched cities are saved in your search history for easy access.

Current weather: Displays the city name, date, weather icon, description, temperature, humidity, and wind speed.

5-day forecast: Shows a 5-day weather outlook, including date, weather icon, temperature, humidity, and wind speed.

Interactive search history: Click on any city from the search history to view its current and future weather conditions.

User Stories
As a traveler, I want to see the weather outlook for multiple cities so that I can plan a trip accordingly.

Given a weather dashboard with form inputs When I search for a city Then I am presented with current and future conditions for that city, and that city is added to the search history.

When I view current weather conditions for that city Then I am presented with the city name, the date, an icon representation of weather conditions, a description of the weather for the icon's alt tag, the temperature, humidity, and wind speed.

When I view future weather conditions for that city Then I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, wind speed, and humidity.

When I click on a city in the search history Then I am again presented with current and future conditions for that city.

Setup
Clone or download the repository.

Install necessary dependencies using npm install.

Run the app with npm start.

Technologies Used
HTML, CSS, JavaScript

API for weather data (e.g., OpenWeatherMap)

Local storage for search history management



