import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  obj: any;
  private shareData = new BehaviorSubject<number>(0) ;
  currentData = this.shareData.asObservable();
  
  private shareRows = new BehaviorSubject<Array<any>>([]);
  dataRow = this.shareRows.asObservable();

  constructor(private http: HttpClient) { 

    
        //  this.getJSON().subscribe(data => this.obj=data, error => console.log(error));

  }

  getInstrument() {
    return this.http.get('assets/json/instruments/kit-1.json');
  }

  getSequence() {
    return this.http.get('assets/json/sequences/seq-1.json');
  }

  getPlayList()
  {
    return this.http.get('assets/json/sequences/playlist.json');
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

playSequence()
{
  //this.data.getSequence().subscribe(data => (this.sequence$ = data));
  alert("inside play sequence"+this.obj);
}

// public getJSON(): Observable<any> {
//   return this.http.get('assets/json/sequences/playlist.json')
//                   .map((res:any) => res.json());

// }


}
