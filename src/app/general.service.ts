import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  getInstrument() {
    return this.http.get('assets/json/instruments/kit-1.json');
  }

  getSequence() {
    return this.http.get('assets/json/sequences/seq-1.json');
  }

}
