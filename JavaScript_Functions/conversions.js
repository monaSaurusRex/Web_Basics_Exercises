/*Write the following conversion methods into arrow functions

    pounds -> kg
    inches -> cm
    F -> C
    feet -> meter

    let myFunction = (a, b) => a * b;
*/

const LB_TO_KG = 2.205, INCH_TO_CM = 2.54, F_TO_C = 32, FT_TO_M = 3.281;


// POUNDS TO KG
let convertLBtoKG = (poundToKG, val) => val / poundToKG;

//INCHES TO CM
let convertINCHtoCM = (constVal, val) => constVal * val;

//FAHRENHEIT TO CELSIUS
let convertFtoC = (val) => (val-32)*5/9;

//FEET TO CM
let convertFTtoM = (constVal, val) => val/constVal;


// OUTPUT
    // POUNDS TO KG
    console.log(convertLBtoKG(LB_TO_KG, 157).toFixed(2))

    //INCHES TO CM
    console.log(convertINCHtoCM(INCH_TO_CM ,6).toFixed(2))

    //FAHRENHEIT TO CELSIUS
    console.log(convertFtoC(50))

    //FEET TO CM
    console.log(convertFTtoM(FT_TO_M,15).toFixed(2))