import { Component, OnInit, AfterViewChecked, OnChanges } from "@angular/core";
import { ControlsComponent } from "../controls/controls.component";
import { GeneralService } from "../general.service";
import { Observable } from "rxjs";
import { Howl } from "howler";
import { RangePipe } from "../pipes/range.pipe";
@Component({
  selector: "app-instrument",
  templateUrl: "./instrument.component.html",
  styleUrls: ["./instrument.component.scss"]
})
export class InstrumentComponent
  implements OnInit, AfterViewChecked, OnChanges {

  input = [];
  _currentBeat: number;

  _rows: Array<any>;
  //   //variables ends here
  beatIndex: number;
  constructor(private data: GeneralService) {}

  ngOnInit() {

    this.data.currentData.subscribe(
      _currentBeat => (this._currentBeat = _currentBeat)
    );

    console.log(this._currentBeat);
    console.log("**I am rows*" + this._rows);
    this.beatIndex = this._currentBeat;
  }

  ngOnChanges() {}

  ngAfterViewChecked() {

    this.data.dataRow.subscribe(_rows => (this._rows = _rows));

    console.log("**I am view checked rows*" + this._rows);
  }

  currentBeat() {
    return this._currentBeat;
  }


}
