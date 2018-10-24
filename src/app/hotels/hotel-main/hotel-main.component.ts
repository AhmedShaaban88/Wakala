import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-main',
  templateUrl: './hotel-main.component.html',
  styleUrls: ['./hotel-main.component.css']
})
export class HotelMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (window.innerWidth < 768) {
      document.getElementsByClassName('list-group').item(0).classList.remove('show');
      document.getElementsByClassName('list-group').item(1).classList.remove('show');
    }

  }

}
