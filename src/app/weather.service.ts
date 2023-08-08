import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly _url: string = 'http://localhost:8080/weather/';

  constructor(private http: HttpClient) { }

  getWeatherData(city:any): Observable<any> {
    console.log(city);
    return this.http.get( this._url + city);
  }

}
