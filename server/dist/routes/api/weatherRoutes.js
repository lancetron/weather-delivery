import { Router } from 'express';
import HistoryService from '../../service/historyService';
import WeatherService from '../../service/weatherService';
const router = Router();
// POST Request with city name to retrieve weather data
router.post('/', async (req, res) => {
    try {
        const { city } = req.body;
        if (!city) {
            return res.status(400).json({ error: 'City name is required' });
        }
        // Get weather data from city name
        const weatherData = WeatherService.getWeatherByCity(city);
        // Use the City class from historyService
        return res.status(200).json({ city, weatherData });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});
// Utility function to generate a unique id
// GET search history
router.get('/history', async (_req, res) => {
    try {
        const history = HistoryService.getHistory();
        res.status(200).json(history);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve search history' });
    }
});
// DELETE city from search history
export default router;
