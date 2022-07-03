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

