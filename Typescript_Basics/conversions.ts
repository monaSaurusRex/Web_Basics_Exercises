/*Write the following conversion methods into arrow functions

    pounds -> kg
    inches -> cm
    F -> C
    feet -> meter

    let myFunction = (a, b) => a * b;
*/

const LB_TO_KG: number = 2.205,  INCH_TO_CM: number = 2.54, F_TO_C: number = 32, FT_TO_M: number = 3.281;


// POUNDS TO KG
let convertLBtoKG = (poundToKG:number, val:number) => { return val / poundToKG; }

//INCHES TO CM
let convertINCHtoCM = (constVal: number, val:number) => {return constVal * val;}

//FAHRENHEIT TO CELSIUS
let convertFtoC = (val:number) => {return (val-32)*5/9;}

//FEET TO CM
let convertFTtoM = (constVal:number, val:number) => {return val/constVal;}


// OUTPUT
// POUNDS TO KG
console.log(convertLBtoKG(LB_TO_KG, 157).toFixed(2))

//INCHES TO CM
console.log(convertINCHtoCM(INCH_TO_CM ,6).toFixed(2))

//FAHRENHEIT TO CELSIUS
console.log(convertFtoC(50))

//FEET TO CM
console.log(convertFTtoM(FT_TO_M,15).toFixed(2))