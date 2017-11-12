import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Weather } from '../../domain/weather.object';
import { OwmService } from '../../services/owm.service';
import { Coords } from '../../domain/coords.object';
import { Temperatures } from '../../domain/temperatures.object';
import { WeatherConditions } from '../../domain/weather_conditions.object';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private currentWeather: Weather;

  constructor(public navCtrl: NavController, private owmService: OwmService) {
   /* this.currentWeather = new Weather();
    this.currentWeather.coords = new Coords();
    this.currentWeather.temperatures = new Temperatures();
    this.currentWeather.weatherConditions = new WeatherConditions();
    this.owmService.getCurrentWeather().toPromise().then(data => this.formatWeather(data));
*/
    this.currentWeather = this.exemple();
  }

  private formatWeather(data) {

    this.currentWeather.coords.longitude = data.coord.lon;
    this.currentWeather.coords.latitude = data.coord.lat;

    this.currentWeather.name = data.name;
    this.currentWeather.sunrise = data.sys.sunrise;
    this.currentWeather.sunset = data.sys.sunset;

    this.currentWeather.temperatures.temp = data.main.temp;
    this.currentWeather.temperatures.temp_max = data.main.temp_max;
    this.currentWeather.temperatures.temp_min = data.main.temp_min;

    this.currentWeather.weatherConditions.clouds = data.clouds.all;
    this.currentWeather.weatherConditions.conditionsDescription = data.weather.description;
    this.currentWeather.weatherConditions.conditionsMain = data.weather.main;
    this.currentWeather.weatherConditions.humidity = data.main.humidity;
    this.currentWeather.weatherConditions.pressure = data.main.pressure;
  }


  private exemple() {
    let w = new Weather();
    let coords = new Coords();
    let temp = new Temperatures();
    let weather_conditions = new WeatherConditions();
    
        coords.longitude = -41;
        coords.latitude = 5;
    
        w.name = "Grenoble";
        w.sunrise = 1510468305*1000;
        w.sunset = 1510503018*1000;
    
        temp.temp = 12.44;
        temp.temp_max = 14;
        temp.temp_min = 11;
    
        weather_conditions.clouds = 75;
        weather_conditions.conditionsDescription = "Light rain";
        weather_conditions.conditionsMain = "Rain";
        weather_conditions.humidity = 76;
        weather_conditions.pressure = 1012;


        w.coords = coords;
        w.temperatures = temp;
        w.weatherConditions = weather_conditions;
        return w;
      }

}
