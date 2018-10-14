import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (window.innerWidth < 768) {
      document.getElementsByClassName('list-group').item(0).classList.remove('show');
    }
  }

}
