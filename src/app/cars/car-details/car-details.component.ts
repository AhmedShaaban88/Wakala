import { Component, OnInit, ElementRef } from '@angular/core';
import {E} from '@angular/core/src/render3';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
   addItem(index: number) {
    if ((<HTMLElement> document.getElementsByClassName('map-item-overlay').item(index)).style.display === 'block') {
      (<HTMLElement> document.getElementsByClassName('map-item-overlay').item(index)).style.display = 'none';
    } else {
      (<HTMLElement> document.getElementsByClassName('map-item-overlay').item(index)).style.display = 'block';
    }

  }

}
