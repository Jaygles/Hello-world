import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

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

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
