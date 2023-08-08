import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _weatherService: WeatherService) {}

  weatherData: any=null;
  city: any="tokyo";
  searchClicked: boolean = false;

  onSearch(): void {
    this.searchClicked = true;
    this._weatherService.getWeatherData(this.city).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
      console.log("searchTerm");
    },error => {
      console.log(error);
      this.weatherData = null;
    });

  }

}
