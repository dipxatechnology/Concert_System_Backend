// Import necessary modules from Nest.js
import { Controller, Get } from '@nestjs/common';
import * as fs from 'fs';

@Controller('example')
export class ExampleController {
  @Get('json')
  getJsonFile(): any {
    try {
      // Specify the path to your JSON file
      const filePath = './data.json';

      // Read the JSON file
      const jsonData = fs.readFileSync(filePath, 'utf-8');

      // Parse the JSON data
      const parsedData = JSON.parse(jsonData);

      // Return the parsed data
      return parsedData;
    } catch (error) {
      // Handle errors, e.g., file not found, JSON parse error
      console.error('Error reading JSON file:', error.message);
      return { error: 'Error reading JSON file' };
    }
  }
}
