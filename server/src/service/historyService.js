import fs from 'fs/promises';
import path from 'path';
// Define a City class with name and id properties
class City {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class HistoryService {
    constructor() {
        this.filePath = path.join(__dirname, '../../data/searchHistory.json');
    }
    async read() {
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            return JSON.parse(data);
        }
        catch (error) {
            if (error.code === 'ENOENT') {
                // If file doesn't exist, return an empty array
                return [];
            }
            throw error;
        }
    }
    async write(cities) {
        await fs.writeFile(this.filePath, JSON.stringify(cities, null, 2), 'utf-8');
    }
    async getCities() {
        return await this.read();
    }
    async addCity(city) {
        const cities = await this.read();
        cities.push(city);
        await this.write(cities);
    }
    async removeCity(id) {
        const cities = await this.read();
        const updatedCities = cities.filter(city => city.id !== id);
        await this.write(updatedCities);
    }
    saveCity(city) {
        console.log(`Saving city: ${city.name}`);
        // Implementation can be added if needed
    }
    deleteCityById(id) {
        console.log(`Deleting city with ID: ${id}`);
        // Implementation can be added if needed
    }
    getHistory() {
        console.log('Fetching history...');
        // Implementation can be added if needed
    }
}
export default new HistoryService();
