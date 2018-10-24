import { Component, OnInit } from '@angular/core';
import {MouseEvent} from '@agm/core';
import * as $ from 'jquery';

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  zoom = 10;
  lat = 51.673858;
  lng = 7.815982;
  constructor() {}
  ngOnInit() {
    $('.tabs li a')[4].click();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        }));
    }
  }
  activeTab(index: number) {
    $('.tabs li').removeClass('active');
    $('.tabs li').eq(index).addClass('active');
    $('.tabs li').eq(index).find('a')[0].click();
  }

  mapInfo(event: MouseEvent) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
}
