//logical AND (&&)
//returns true if both are true 

console.log(false && true);

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome &&  goodCreditScore;

//console.log(eligibleForLoan);


//logical OR (||)
//returns  true if one of the operands is true
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome ||  goodCreditScore;

console.log('eligible',eligibleForLoan);


//Not operator (!)
let applicationRefused = !eligibleForLoan;

console.log('refused',applicationRefused);

//logical with non-boolean 
//we provide default value in this way
let userColor = 'red';
let defaultColor = 'blue';
let currentcolor = userColor || defaultColor;

console.log(currentColor);

