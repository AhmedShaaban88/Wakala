import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-villa-details',
  templateUrl: './villa-details.component.html',
  styleUrls: ['./villa-details.component.css']
})
export class VillaDetailsComponent implements OnInit {
  private btns: any;
  constructor( private elem: ElementRef) { }

  ngOnInit() {
    this.btns = this.elem.nativeElement.querySelector('#btns');
  }
  showBtns() {
    setTimeout(() => {
      this.btns.style.opacity = '0.9';
    }, 100);

  }
  hideBtns() {
    this.btns.style.opacity = '0';

  }





}
