import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent{

  @Input() weatherData: any;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
  }
  
}
