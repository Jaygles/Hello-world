import {Component, Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';

let emitter;
const observable = Observable.create(e => emitter = e);
const observer = {
  next: function(next) {
    console.log(next);
  },
  error: function(error) {
    console.log(error);
  },
  complete: function() {
    console.log('done');
  }
};
observable.subscribe(observer);
emitter.next('Hello world');
emitter.complete();

const weather = Observable.of();
weather.subscribe(observer);

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})

export class HelloWorldComponent implements OnInit {
  title;
  url = 'https://api.openweathermap.org/data/2.5/weather?q=Kansas&APPID=6cc7c6ab8b2be4130c22373b991a01d4';

  constructor(private http: HttpClient) {
  }

  getWeather() {
    Observable.of(this.http.get(this.url).subscribe(res => {
      this.title = JSON.stringify(res);
    }));
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(data => {
      console.log(data);
    });
  }
}
