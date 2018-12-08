import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private shareData = new BehaviorSubject<number>(0) ;
  currentData = this.shareData.asObservable();
  
  private shareRows = new BehaviorSubject<Array<any>>([]);
  dataRow = this.shareRows.asObservable();

  constructor(private http: HttpClient) { }

  getInstrument() {
    return this.http.get('assets/json/instruments/kit-1.json');
  }

  getSequence() {
    return this.http.get('assets/json/sequences/seq-1.json');
  }

  currentBeat(beat:number)
  {
    this.shareData.next(beat);
  }

  getRows(row:Array<any>)
  {
    this.shareRows.next(row);
    console.log("service   "+row);

  }
}
