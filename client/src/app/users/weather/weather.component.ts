import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public data: Array<any> =[]
  sourceImg: string


  constructor(private http:HttpClient) { }

  ngOnInit() {
    
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=Banja+Luka,ba&units=metric&APPID=ed1f5dd1d096e2db573142fb113a783b")
    .subscribe(
      (result: any)=> {
        console.log(result)
        this.data.push(result)
        this.sourceImg = "http://openweathermap.org/img/w/" + result.weather[0].icon + ".png";
        
      })
  }

}
