'use strict';

export function Instrument(player, inst) {
let audioPlayer = player;
let name = inst.name;
let description = inst.description;
  
  function getName() {
    return name;
  }

  function getDescription() {
    return description;
  }

  function play() {
    try {
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

