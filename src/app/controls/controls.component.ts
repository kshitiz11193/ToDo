import { Component, OnInit, AfterViewChecked, OnChanges } from "@angular/core";
import { GeneralService } from "../general.service";
import { Observable } from "rxjs";
import { Howl } from "howler";
import { RangePipe } from "../pipes/range.pipe";

@Component({
  selector: "app-controls",
  templateUrl: "./controls.component.html",
  styleUrls: ["./controls.component.scss"]
})
export class ControlsComponent implements OnInit, AfterViewChecked, OnChanges {
  instrument$: any;
  sequence$: any;
  jData: boolean = false;
  //drum inititalization variables
  input = [];
  _playing = false;
  _currentBeat = 0;
  _delay = 100;
  _gridLength = 16;
  _tempo = 120;
  //_timers = 0;

  _rows = [];
  //variables ends here
  constructor(private data: GeneralService) {}

  ngOnInit() {
    this.data.getInstrument().subscribe(data => (this.instrument$ = data));

    this.data.getSequence().subscribe(data => (this.sequence$ = data));
  }

  ngOnChanges() {}

  ngAfterViewChecked() {

    if (
      this.instrument$ !== undefined &&
      this.sequence$ !== undefined &&
      this.jData === false
    ) {
      this.loadInstruments();

      this.loadSequence();
      this.jData = true;
    }
  }



  loadInstruments() {
    let item, player, instrument;


    if (this.instrument$ != undefined) {
      for (let i = 0; i < 4; i++) {
        item = this.instrument$.instruments[i].file;
        console.log("item:  " + item);
        console.log("$$$inside instrument load");

        player = new Howl({ src: ["assets/audio/" + item] });

        console.log("rows value" + this._rows);
      }
    }
  }

  loadSequence() {
    if (this.sequence$ != undefined) {

      console.log("inside load sequence" + this.sequence$);
      this._gridLength = this.sequence$.gridLength;


    }
  }
}
