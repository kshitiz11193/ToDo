import { Component, OnInit, AfterViewChecked, OnChanges } from "@angular/core";
import { GeneralService } from "../general.service";
import { BeatsService } from "../beats.service";
import { Howl } from "howler";
import { UserService } from "../user.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-controls",
  templateUrl: "./controls.component.html",
  styleUrls: ["./controls.component.scss"]
})
export class ControlsComponent implements OnInit, AfterViewChecked, OnChanges {
  instrument$: any;
  sequence$: any;
  jData: boolean = false;
  input: Array<any> = [];
  _playing = false;
  _currentBeat: number;
  _delay: Number = 100;
  _gridLength = 16;
  _tempo = 120;
  tuneName: String;
  _rows: Array<any>;
  _queue: any;
  saveSequence: Array<any> = [];
  //variables ends here
  constructor(
    private data: GeneralService,
    private rowData: BeatsService,
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.data.getInstrument().subscribe(data => (this.instrument$ = data));

    this.data.getSequence().subscribe(data => (this.sequence$ = data));

    this.data.currentData.subscribe(
      _currentBeat => (this._currentBeat = _currentBeat)
    );

    this.data.dataRow.subscribe(_rows => (this._rows = _rows));
    this.range();
    this._queue = this.rowData.timer_q();
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
/**
 *Gives range to the grid that rotates as the beat progresses
 *
 * @memberof ControlsComponent
 */
range() {
    for (let i = 1; i <= 16; i++) {
      this.input.push(i);
    }
  }

  /**
   *This function loads the Instruments i.e. the sample sounds of different instruments
   *
   * @memberof ControlsComponent
   */
  loadInstruments() {
    let item, player, instrument;

    if (this.instrument$ != undefined) {
      this._rows = [];
      for (let i = 0; i < 4; i++) {
        item = this.instrument$.instruments[i].file;


        player = new Howl({ src: ["assets/audio/" + item] });
        instrument = this.rowData.Instrument(
          player,
          this.instrument$.instruments[i]
        );
        this._rows.push(this.rowData.Row(instrument, this._gridLength));
      }
      this.data.getRows(this._rows);
    }
  }
/**
 *This function loads the sequence which is reflected on the 4x16 grid
 *
 * @memberof ControlsComponent
 */
loadSequence() {
    if (this.sequence$ != undefined) {
      this.reset();

      this._gridLength = this.sequence$.gridLength;

      this.setTempo(this.sequence$.tempo);

      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < this._gridLength; j++) {
          if (this.sequence$.rows[i][j] === "1") {
            this._rows[i].getBeats()[j].activate();
          } else {
            this._rows[i].getBeats()[j].deactivate();
          }
        }
      }
    }
  }

  CloseEdit(){
    var bpmEdit = document.getElementById('bpmEdit');
      var bpm = document.getElementById('bpm');
      bpm.style.display = 'inline-block';
      bpmEdit.style.display = 'none';
  }


/**
 *This function saves the user generated sequence of beats
 *
 * @returns
 * @memberof ControlsComponent
 */
save() {
    let array = [];
    var viewData = {
      name: this.tuneName,
      sequence: []
    };
    let count = 0;
    for (let i = 0; i < this._rows.length; i++) {
      let seq = "";

      for (let j = 0; j < 16; j++) {

        if (this._rows[i].getBeats()[j].isActive()) {
          seq = seq + 1;
        } else {
          seq = seq + 0;
        }
      }
      debugger;
      viewData.sequence[count] = seq;
      count++;
      array.push(seq);
    }
    alert(JSON.stringify(viewData));
    return viewData;
  }


/**
 *This function sends the user generated sequence to save it in mongoDB
 *
 * @memberof ControlsComponent
 */
addToPlayList() {
    this.userService
      .addToPlayList(this.save(), this.cookieService.get("email"))
      .then(
        data => {
        },
        error => console.error(error)
      );
  }

  /**
   *this function sets the tempo for the tune
   *
   * @param {*} newTempo
   * @memberof ControlsComponent
   */
  setTempo(newTempo) {
    this._tempo = newTempo;

    this._delay = this.beatDelay();
  }
/**
 *This functions plays the beat by clicking the play button
 *
 * @memberof ControlsComponent
 */
play() {
    console.log("inside play");
    this._playing = true;
    this._queue.add(this.playBeat(), this.beatDelay());
    this.data.currentBeat(this._currentBeat);
  }
/**
 *This function stops the currently playing beat
 *
 * @memberof ControlsComponent
 */
stop() {
    console.log("inside stop");
    this._playing = false;
    this._queue.clear();
  }
/**
 *This function resets the whole grid so that user can create his own beat
 *
 * @memberof ControlsComponent
 */
reset() {
    console.log("inside reset");
    stop();
    this._currentBeat = 0;
    this.resetAllRows();
  }

  playBeat = () => {
    var xyz = this;

    return function() {
      if (xyz._currentBeat >= xyz._gridLength) {
        xyz._currentBeat = 0;
        console.log("current beat set to zero");
      }

      for (var i = 0; i < xyz._rows.length; i++) {
        xyz._rows[i].playSound(xyz._currentBeat);
      }
      xyz._currentBeat += 1;
      xyz._queue.add(xyz.playBeat(), xyz._delay);
    };
  };

  resetAllRows() {
    for (var i = 0; i < this._rows.length; i++) {
      this._rows[i].reset();
    }
  }
/**
 *Adds delay to the beat
 *
 * @returns
 * @memberof ControlsComponent
 */
beatDelay() {
    return (1000 / (this._tempo * 2)) * 60;
  }
}
