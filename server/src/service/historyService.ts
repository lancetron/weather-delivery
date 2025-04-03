import fs from 'fs/promises';
import path from 'path';

// Define a City class with name and id properties
class City {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

class HistoryService {
  private filePath = path.join(__dirname, '../../data/searchHistory.json');

  private async read(): Promise<City[]> {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(data) as City[];
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        // If file doesn't exist, return an empty array
        return [];
      }
      throw error;
    }
  }

  private async write(cities: City[]): Promise<void> {
    await fs.writeFile(this.filePath, JSON.stringify(cities, null, 2), 'utf-8');
  }

  async getCities(): Promise<City[]> {
    return await this.read();
  }

  async addCity(city: City): Promise<void> {
    const cities = await this.read();
    cities.push(city);
    await this.write(cities);
  }

  async removeCity(id: string): Promise<void> {
    const cities = await this.read();
    const updatedCities = cities.filter(city => city.id !== id);
    await this.write(updatedCities);
  }

  saveCity(city: City): void {
    console.log(`Saving city: ${city.name}`);
    // Implementation can be added if needed
  }

  deleteCityById(id: string): void {
    console.log(`Deleting city with ID: ${id}`);
    // Implementation can be added if needed
  }

  getHistory(): void {
    console.log('Fetching history...');
    // Implementation can be added if needed
  }
}

export default new HistoryService();
