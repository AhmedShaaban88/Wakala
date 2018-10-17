import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-cars-main',
  templateUrl: './cars-main.component.html',
  styleUrls: ['./cars-main.component.css']
})
export class CarsMainComponent implements OnInit {
  carName = 'Honda civic 2018';
  carNameUrl: string;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth < 768) {
      document.getElementById('collapseCarBtn').classList.add('collapsed');
      document.getElementById('collapseCars').classList.remove('show');
    }
    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 70,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }, });

    this.carNameUrl = this.parseUrl();
  }
  parseUrl() {
    return this.carName.replace(/\s/g, '_').toLowerCase();
  }

}
