//find maximum of two numbers
let number = max(3,2);
console.log(number);

function max(a,b){
    // if (a > b) return a;
    // return b;

  return  (a > b) ? a : b;
}


//landscape function with boolean output
let number = isLandscape(3,2);
console.log(number);

function isLandscape(width,height){
  //return  ( width > height) ? true : false;
  return  (width > height);
}


//fizbuzz function 
const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input){
    if(typeof input != 'number')
     return 'Not a Number';

    if(input % 3=== 0)
      return 'Fizz';

    if(input % 5=== 0)
      return 'Fizz'; 
      
    if((input % 3=== 0)&& (input % 5=== 0))
      return 'FizzBuzz'; 
      
    return input;       
}


