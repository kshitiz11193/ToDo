import { Component, OnInit, AfterViewChecked, OnChanges } from "@angular/core";
import { GeneralService } from "../general.service";
import {BeatsService} from "../beats.service"
import { Observable } from "rxjs";
import { Howl } from 'howler';
import { RangePipe } from "../pipes/range.pipe";
import {UserService} from "../user.service";
import { CookieService } from 'ngx-cookie-service';
//import { Instrument} from "../instrument";
//import {Row} from "../row";

//import { timer_q} from "../timer_queue"

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit,AfterViewChecked, OnChanges {

  instrument$: any;
  sequence$: any;
  jData: boolean = false;
  //drum inititalization variables
  input =[];
  _playing = false;
  _currentBeat:number;
  _delay = 100;
  _gridLength = 16;
  _tempo = 120;
 //_timers = 0;
  
 _rows:Array<any>;
 _queue :any;
 saveSequence =[];
  //variables ends here
  constructor(private data: GeneralService,private rowData: BeatsService, private userService: UserService, private cookieService: CookieService) {}


  ngOnInit() {
    this.data.getInstrument().subscribe(data => (this.instrument$ = data));

    this.data.getSequence().subscribe(data => (this.sequence$ = data));

    this.data.currentData.subscribe(_currentBeat => this._currentBeat = _currentBeat)

    this.data.dataRow.subscribe(_rows => this._rows = _rows);
    // this.loadInstruments();
    this.range();
    this._queue = this.rowData.timer_q();
    
    
  }

  ngOnChanges(){

    
  }
  
  ngAfterViewChecked() {
    //console.log(this.instrument$);
    //console.log(this.sequence$);
    //if(this.instrument$.length != 0)
    if (this.instrument$ !==undefined && this.sequence$ !==undefined && this.jData === false) {
      this.loadInstruments();
      
      this.loadSequence();
      //this.play();
      this.jData = true;

    }
    
  }

  range()
  {
    console.log(typeof(this.input));
    for (let i=1; i<=16; i++)
    {
        this.input.push(i);
    }
  }

   loadInstruments() {
    let item, player, instrument;

   
    
//new Howl({src: ['sound.webm', 'sound.mp3']});
    
if(this.instrument$!=undefined)
{
  //console.log("LI"+this.instrument$.instruments);
  this._rows=[];
      for(let i = 0; i < 4; i++) {
        item = this.instrument$.instruments[i].file;
        console.log("item:  "+item);
        console.log('$$$inside instrument load');
       
         player = new Howl({ src: ['assets/audio/' + item] });
         //player.play();
        instrument =  this.rowData.Instrument(player, this.instrument$.instruments[i]);
        //instrument.play();
        this._rows.push( this.rowData.Row(instrument, this._gridLength));
        console.log("rows value"+this._rows);
        
        
      }
      this.data.getRows(this._rows);
      
     // this.loadSequence();
    }
   
  }

   loadSequence() {
   
if(this.sequence$!=undefined)
{
   this.reset();

      console.log("inside load sequence"+this.sequence$);
      this._gridLength = this.sequence$.gridLength;
      
      this.setTempo(this.sequence$.tempo);

      for(var i = 0; i < 4; i++) {
        for(var j = 0; j < this._gridLength; j++) {
          if (this.sequence$.rows[i][j] === "1") {
            this._rows[i].getBeats()[j].activate();
            console.log("row value inside load"+ this._rows[i].getBeats()[j]);
            
          } else {
            this._rows[i].getBeats()[j].deactivate();
          }
        }
      }
    }
  }

  save()
  {
    let finalSequence = [];
    for(let i = 0; i< this._rows.length ; i++)
    {
      let seq = "";
      let array = [];


      for(let j = 0; j< 16; j++)
    {
      console.log(this._rows[i].getBeats());
      if(this._rows[i].getBeats()[j].isActive())
      {

        seq = seq + 1;
        console.log("sequence-------------------------"+seq);
      }

      else{

        seq = seq + 0;
      }



    }
    array.push(seq);
console.log("array-------------------------"+array);
finalSequence.push(array);

    }
    console.log("final sequence-------------------------"+finalSequence);
    //this.saveSequence = finalSequence;
    return finalSequence;
  }





  addToPlayList()
 {
    this.saveSequence=this.save();
   console.log("row inside playlist" +this.saveSequence);
   debugger
 this.userService.addToPlayList(this.saveSequence, this.cookieService.get('email')).then(
  data=>{console.log("Hello world"+data);},
  error=>console.error(error)
 )}
  //  rows() {
  //   return this._rows;
  // }

  //  tempo() {
  //   return this._tempo;
  // }

  //  gridLength() {
  //   return this._gridLength;
  // }

  //  currentBeat() {
  //    //return ;
     
  //  }

   setTempo(newTempo) {
    console.log("inside tempo" + newTempo);
    this._tempo = newTempo;

    this. _delay = this.beatDelay();
  }

   play() {
     console.log("inside play")
    // debugger
    this._playing = true;
    this._queue.add(this.playBeat(), this.beatDelay());
    this.data.currentBeat(this._currentBeat);
  }

   stop() {
    console.log("inside stop")
    this._playing = false;
    this._queue.clear();
  }

   reset() {
    console.log("inside reset")
    stop();
    this._currentBeat = 0;
    this.resetAllRows();
  }

  
  // Benchmark Code
  //var lastTime = new Date().getTime();
   playBeat = () => {
    var xyz = this;
      // let _currentBeat = this._currentBeat;
      // let _rows = this._rows;
      // let _gridLength = this._gridLength;
      // let timer_queue = this._queue;
      // let delay = this._delay;
      // let playBeat = this.playBeat;

      return function() {
       
       //alert(xyz._rows);
       //debugger
      //var thisTime = new Date().getTime();
      //console.log("Delay: " + _delay + " Diff: " + (thisTime - lastTime));
      //lastTime = thisTime;
      if (xyz._currentBeat >= xyz._gridLength) {
        xyz._currentBeat = 0;
        console.log("current beat set to zero");
      }
      
      for (var i = 0; i < xyz._rows.length; i++) {
        xyz._rows[i].playSound(xyz._currentBeat);
      }
      xyz._currentBeat += 1;
      console.log("current beat: "+xyz._currentBeat);
      xyz._queue.add( xyz.playBeat(), xyz._delay);
    };
  }

   resetAllRows() {
    for(var i = 0; i < this._rows.length; i++) {
      this._rows[i].reset();
    }
  }

   beatDelay() {
    return (1000 / (this._tempo * 2) * 60);
  }

   
  

//    queue() {
//     return this._queue;
//   }
// // //setTimeout(function () {
// //   console.log('hide');
// //   this.showElement = false;
// // }, 2000);

//    add(fn, delay) {
//      debugger;
//     this._queue.push(setTimeout(fn, delay));
//   }
  
//    clear() {
//     for (var i = 0; i < this._queue.length; i++) {
//       clearTimeout(this._queue[i]);
//     }
//     this._queue = [];
//   }

  // return {
  //   queue: queue,
  //   add: add,
  //   clear: clear
  // };
  // Return public functions
//   return {
//     loadInstruments: loadInstruments,
//     loadSequence: loadSequence,
//     gridLength: gridLength,
//     currentBeat: currentBeat,
//     rows: rows,
//     tempo: tempo,
//     setTempo: setTempo,
//     play: play,
//     stop: stop,
//     reset: reset
//   }
// });

}
