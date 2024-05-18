import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { WeatherForecast } from './weather-forecast';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ConnToWebAPIService {
  http = inject(HttpClient);
  constructor() { }
  
  readonly rootUrl = "https://mod08api01.azurewebsites.net/WeatherForecast";

  Get117() {
    return this.http.get(`${this.rootUrl}/Get117`, {responseType:"text"})
    // this.http.get(`${this.rootUrl}/Get117`, {responseType:"text"})
    // .subscribe(
    //   {
    //     next: resp => console.log(resp),
    //     error: error => console.log(error)
    //   }
    // )
  }

  GetWeatherForecast() {
    return this.http.get<WeatherForecast[]> (`${this.rootUrl}`);
  }

  GetUser(id: number) {
    return this.http.get<User> (`${this.rootUrl}/${id}`)
  }

  GetUSerByOptions(id: number, observe: string) {
    let options: any;
    switch (observe) {
      case "body":
        options = {observe: "body", responseType: "text"};
        break;
      case "response":
        options = {observe: "response", responseType: "text"};
        break;
      default:
        options = {}
    }
    return this.http.get(`${this.rootUrl}/${id}`, options)
  }

  POSTUser(user: User) {
    return this.http.post(`${this.rootUrl}`, user, {responseType: "text"})
  }

  GetDownload(file: string) {
    return this.http.get(`${this.rootUrl}/download/${file}`,
      {
        reportProgress: true,
        observe: "events",
        responseType: "blob"
      }
    )
  }
}
