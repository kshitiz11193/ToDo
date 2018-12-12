import { Howl } from 'howler';
import { Injectable } from '@angular/core';
import { GeneralService } from "./general.service";
import {BeatsService} from "./beats.service"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { OnInit, AfterViewChecked, OnChanges } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class PlaySequenceService implements OnInit{
  instrument$: any;
  sequence$: any;
  currentBeat=0;
  rows$=[];
  queue :any;
  gridLength = 16;
  tempo = 120;
  delay = 100;
  jData: boolean = false;
  //drum inititalization variables
  input =[];
  playing = false;

  instruments= [
    { "name" : "Kick",
      "file" : "CYCdh_AcouKick-01.mp3" },
    { "name" : "Snare",
      "file" : "CYCdh_LudFlamA-01.mp3" },
    { "name" : "Hi-Hat",
      "description" : "closed",
      "file" : "KHats Clsd-08.mp3" },
    { "name" : "Hi-Hat",
      "description" : "open",
      "file" : "KHats Open-04.mp3" }
  ]

  constructor(private data: GeneralService,private rowData: BeatsService) {
    this.queue = this.rowData.timer_q();
  }


  ngOnInit() {
    this.data.getInstrument().subscribe(data => (this.instrument$ = data));

    this.data.getSequence().subscribe(data => (this.sequence$ = data));

    this.data.currentData.subscribe(_currentBeat => this.currentBeat = _currentBeat)

    //this.data.dataRow.subscribe(_rows => this.rows$ = _rows);
    // this.loadInstruments();
    //this.range();
    debugger
    this.queue = this.rowData.timer_q();
    alert(this.queue);

  }




  playList(tone:Array<any>)
  {
    debugger

    this.loadInstruments();
    this.loadSequence(tone);
    this.play();
  }


  loadInstruments() {
    let item, player, instrument;



      this.rows$ = [];
  //console.log("LI"+this.instrument$.instruments);
      for(let i = 0; i < 4; i++) {
        item = this.instruments[i].file;
        console.log("item:  "+item);
        console.log('$$$inside instrument load');

         player = new Howl({ src: ['assets/audio/' + item] });
         //player.play();
        instrument =  this.rowData.Instrument(player, this.instruments[i]);
        //instrument.play();
        this.rows$.push( this.rowData.Row(instrument, this.gridLength));
        console.log("rows value"+this.rows$);


      }
      this.data.getRows(this.rows$);

     // this.loadSequence();


  }

   loadSequence(tone) {


   //this.reset();

      console.log("inside load sequence"+this.sequence$);
      this.gridLength = this.gridLength;

      this.setTempo(this.tempo);

      for(var i = 0; i < 4; i++) {
        for(var j = 0; j < this.gridLength; j++) {
          if (tone[i][j] === "1") {
            this.rows$[i].getBeats()[j].activate();
            console.log("row value inside load"+ this.rows$[i].getBeats()[j]);

          } else {
            this.rows$[i].getBeats()[j].deactivate();
          }
        }
      }

  }

  setTempo(newTempo) {
    console.log("inside tempo" + newTempo);
    this.tempo = newTempo;

    this. delay = this.beatDelay();
  }

   play() {
     console.log("inside play")
    // debugger
    this.playing = true;
    this.queue.add(this.playBeat(), this.beatDelay());
    this.data.currentBeat(this.currentBeat);
  }

   stop() {
    console.log("inside stop")
    this.playing = false;
    this.queue.clear();
  }

   reset() {
    console.log("inside reset")
    stop();
    this.currentBeat = 0;
    this.resetAllRows();
  }


  // Benchmark Code
  //var lastTime = new Date().getTime();
   playBeat = () => {
    var xyz = this;


      return function() {


      if (xyz.currentBeat >= xyz.gridLength) {
        xyz.currentBeat = 0;
        console.log("current beat set to zero");
      }

      for (var i = 0; i < xyz.rows$.length; i++) {
        xyz.rows$[i].playSound(xyz.currentBeat);
      }
      xyz.currentBeat += 1;
      console.log("current beat: "+xyz.currentBeat);
      xyz.queue.add( xyz.playBeat(), xyz.delay);
    };
  }

   resetAllRows() {
    for(var i = 0; i < this.rows$.length; i++) {
      this.rows$[i].reset();
    }
  }

   beatDelay() {
    return (1000 / (this.tempo * 2) * 60);
  }


}
