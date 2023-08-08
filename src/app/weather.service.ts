import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // local url
  // private readonly _url: string = 'http://localhost:5000/weather/';

  //deployed url
  private readonly _url: string = 'https://weather-check.up.railway.app/weather/';

  constructor(private http: HttpClient) { }

  getWeatherData(city:any): Observable<any> {
    console.log(city);
    return this.http.get( this._url + city);
  }

}
