import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {CallCodesService} from '../Services/call-codes.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [CallCodesService]
})
export class HeaderComponent implements OnInit {
  allCallCodes: any;
  callCodesError: string;
  callCode: string;
  currentFlag = 'flag flag-us';
  constructor(private callCodes: CallCodesService) { }

  ngOnInit() {
    $('#top-nav .call-us').on('click', () => {
      $('#top-nav .call-us').hide();
      $('.mega-menu').slideDown(500);

    });
    this.callCodes.getCallCodes().subscribe(
      codes => this.allCallCodes = codes, error => this.callCodesError = 'Something wrong please try again!',
      () => this.callCode = '+93');
  }
  closeMega(): void {
    $('.mega-menu').slideUp(500);
    $('#top-nav .call-us').show();
  }
  selectCode(code): void {
    this.callCode = code;
  }
  changeLangFlag(val) {
    this.currentFlag = `flag flag-${val}`;
  }


}
