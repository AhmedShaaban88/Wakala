import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hotel-home',
  templateUrl: './hotel-home.component.html',
  styleUrls: ['./hotel-home.component.css']
})
export class HotelHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (window.innerWidth < 768) {
      document.getElementsByClassName('list-group').item(0).classList.remove('show');
      document.getElementsByClassName('list-group').item(1).classList.remove('show');

    }

  }


}
