import { Component, OnInit, AfterViewChecked, OnChanges } from "@angular/core";
import {ControlsComponent} from "../controls/controls.component"
import { GeneralService } from "../general.service";
import { Observable } from "rxjs";
import { Howl } from 'howler';
import { RangePipe } from "../pipes/range.pipe"
@Component({
  selector: "app-instrument",
  templateUrl: "./instrument.component.html",
  styleUrls: ["./instrument.component.scss"]
})
export class InstrumentComponent implements OnInit, AfterViewChecked, OnChanges {
//   instrument$: any;
//   sequence$: Object;
//   jData: boolean = false;
//   //drum inititalization variables
   input =[];
//   _playing = false;
   _currentBeat:number;
//   _delay = 100;
//   _gridLength = 16;
//   _tempo = 120;
//  // _timers = timerQueue;
   _rows :Array<any>;
//   //variables ends here
  beatIndex:number;
   constructor(private data: GeneralService) {}

  ngOnInit() {
    // this.data.getInstrument().subscribe(data => (this.instrument$ = data));

    // this.data.getSequence().subscribe(data => (this.sequence$ = data));
    // // this.loadInstruments();
    this.data.currentData.subscribe(_currentBeat => this._currentBeat = _currentBeat);
    //this.data.dataRow.subscribe(_rows => this._rows = _rows);
    this.range();
    console.log(this._currentBeat);
    console.log("**I am rows*"+this._rows);
    this.beatIndex = this._currentBeat;
    
  }

  ngOnChanges(){
   
    
  }
  
  ngAfterViewChecked() {
    //console.log(this.instrument$);
    //console.log(this.sequence$);
    //if(this.instrument$.length != 0)
    // if (this.instrument$ !==undefined  && this.jData === false) {
    //   this.loadInstruments();
      
    //   this.jData = true;

    // }
    this.data.dataRow.subscribe(_rows => this._rows = _rows);
    //alert(this._rows)
    
    console.log("**I am view checked rows*"+this._rows);
  }

   currentBeat() {
    return this._currentBeat;
  }


  range()
  {
    console.log(typeof(this.input));
    for (let i=1; i<=16; i++)
    {
        this.input.push(i);
    }
  }
//   range()
//   {
//     console.log(typeof(this.input));
//     for (let i=1; i<=16; i++)
//     {
//         this.input.push(i);
//     }
//   }

//    loadInstruments() {
//     let item, player, instrument;

   
    
// //new Howl({src: ['sound.webm', 'sound.mp3']});
    
// if(this.instrument$!=undefined)
// {
//   //console.log("LI"+this.instrument$.instruments);
//       for(let i = 0; i < 4; i++) {
//         item = this.instrument$.instruments[i].file;
//         console.log("item:  "+item);
//         //alert('inside load '+item);
//          player = new Howl({ src: ['assets/audio/' + item] });
//          player.play();
//         // instrument = new Instrument(player, item);
//         // this._rows.push(new Row(instrument, this._gridLength));
//       }
//     }
   
//   }
  
}
