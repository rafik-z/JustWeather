import { Temperatures } from './temperatures.object';
import { Coords } from './coords.object';
import { WeatherConditions } from './weather_conditions.object';

export class Weather {
    public name: String;
    public coords: Coords;
    public sunrise: Number;
    public sunset: Number;
    public temperatures: Temperatures;
    public weatherConditions: WeatherConditions;
}