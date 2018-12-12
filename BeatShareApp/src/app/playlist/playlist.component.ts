import { Component, OnInit } from '@angular/core';
import { GeneralService } from "../general.service";
import {PlaySequenceService} from '../play-sequence.service'
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
    play:any;
  playlist$:any;

  constructor(private data: GeneralService, private playSequence: PlaySequenceService) {


  }

  ngOnInit() {
    this.data.getPlayList().subscribe(data => (this.playlist$ = data));

  }

  playBeat(row:Array<any>)
  {
    this.playSequence.playList(row);

  }

  stopIt()
  {
    debugger
    this.playSequence.stop();
    
  }

}
