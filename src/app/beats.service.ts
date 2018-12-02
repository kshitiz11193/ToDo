import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeatsService {

  constructor() { }


  Instrument(player, inst) {
    let audioPlayer = player;
    let name = inst.name;
    let description = inst.description;
      
      function getName() {
        return name;
      }
    
      function getDescription() {
        //alert("hi i am now"+inst.description);
        return description;
      }
    
      function play() {
        try {
          //alert("playing");
          audioPlayer.play();
          return true;
        } catch(e) {
          console.log("Unable to play sound", e);
          return false;
        }
      };
    
      // Return public functions
      return {
        getName: getName,
        getDescription: getDescription,
        play: play
      }
    }; 


   Row(lInstrument, initialBeats) {
    var instrument = lInstrument;
    var beats = [];
  
    // Add initial beats
    addBeats(initialBeats);
  
    function getInstrument() {
      return instrument;
    }
  
    function getBeats() {
      return beats;
    }
  
    function addBeats(num) {
      for(var i = 0; i < num; i++) {
        beats.push( Beat());
      }
    }
  
    function reset() {
      for(var i = 0; i < beats.length; i++) {
        beats[i].deactivate();
      }
    }
  
    function playSound(index) {
      console.log("instrument"+lInstrument);
      console.log("beats index"+beats[index]);
      if (beats[index].isActive()) {
          
        return instrument.play();
      }
      return false;
    }



   function Beat() {
    let active = false;
  
    function isActive() {
      return active;
    }
  
    function activate() {
      active = true;
    }
  
    function deactivate() {
      active = false;
    }
  
    function toggle() {
      active = (active ? false : true);
    }
  
    // Return public functions
    return {
      isActive: isActive,
      activate: activate,
      deactivate: deactivate,
      toggle: toggle
    }
  };


  
    // Return public functions
    return {
      getInstrument: getInstrument,
      getBeats: getBeats,
      addBeats: addBeats,
      reset: reset,
      playSound: playSound
    }
  };



}
