'use strict';


const measureKelvin = function name() {
      const measurement = {
    type:  `temp`,
    unit:  ` celsuis`,
    //  fix the bug
    value:Number(prompt (`Degree celsius:`)),
      }
    // find the bug 
      console.table(measurement);
     
      const kelvin = measurement.value + 273;
      return kelvin ;
}
// identify bug
console.log(measureKelvin());

