/* Create type script function to check if a number is odd or even */

function isOddOrEven( num:number){

    if(num%2 == 0){
        return "even"
    } else{
        return "odd"
    }
    return num
}

console.log(isOddOrEven(3))
console.log(isOddOrEven(2))