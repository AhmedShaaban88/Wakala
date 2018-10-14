import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface Codes {
  name: string;
  dial_code: string;
  code: string;
}
@Injectable()
export class CallCodesService {
  private codesUrl = '../../assets/api/call-codes.json';
  constructor(private http: HttpClient) { }
  getCallCodes(): Observable<Codes> {
  return this.http.get<Codes>(this.codesUrl);
  }
}
