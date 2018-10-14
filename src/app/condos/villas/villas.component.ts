import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-villas',
  templateUrl: './villas.component.html',
  styleUrls: ['./villas.component.css']
})
export class VillasComponent implements OnInit {
  villaTitle = 'Kuhla Boutique Suite Hotel Opens in new window';
  villaTitleUrl: string;
  constructor() { }
  ngOnInit() {
    if (window.innerWidth < 768) {
      document.getElementsByClassName('list-group').item(0).classList.remove('show');
      document.getElementsByClassName('list-group').item(1).classList.remove('show');
    }
    this.villaTitleUrl = this.parseUrl();
  }
  parseUrl() {
    return this.villaTitle.replace(/\s/g, '_').toLowerCase();
  }

}
