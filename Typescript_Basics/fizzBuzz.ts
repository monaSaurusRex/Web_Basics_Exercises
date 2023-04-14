/*
What is 'fizz-buzz'
'Fizz-buzz' is a simple game you can play in company. Players take turns counting from one upwards, but must apply the following rules:

If a number is divisible by three, say "Fizz!" instead
If a number is divisible by five, say "Buzz!" instead
If a number is divisible by three and by five, say "Fizz-Buzz!"
Otherwise, just say the number as you would normally

*/

function fizzBuzz(num: number){

    // switch(true){
    //     case (num%3===0 && num%5===0):
    //         return "Fizz-Buzz!"
    //     case (num%3==0):
    //         return "Fizz!"     
    //     case(num%5==0):
    //         return "Buzz!";
    //     default:
    //         return num
    // }

    //ternary operator 
    (num%3===0 && num%5===0)? console.log("Fizz-Buzz!") : 
    (num%3==0) ? console.log("Fizz!") : 
    (num%5==0) ? console.log("Buzz!" ) :
    console.log(num)

}

// console.log(fizzBuzz(15))
// console.log(fizzBuzz(3))
// console.log(fizzBuzz(5))
// console.log(fizzBuzz(2))

//ternary operator
fizzBuzz(15)
fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(2)