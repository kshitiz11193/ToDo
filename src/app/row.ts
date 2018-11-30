'use strict';
import {Beat} from "./beat"
export function Row(lInstrument, initialBeats) {
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

  // Return public functions
  return {
    getInstrument: getInstrument,
    getBeats: getBeats,
    addBeats: addBeats,
    reset: reset,
    playSound: playSound
  }
};