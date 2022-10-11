import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from './parks/RockyMountain'

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  
  return <h1>Colorado State Parks!</h1>;
}



console.log(RMFunctions.trees);
// => "Aspen and Pine"

RMFunctions.wildlife();
// => "Elk, Bighorn Sheep, Moose"

RMFunctions.elevation();
// => Attempted import error

export default ColoradoStateParks