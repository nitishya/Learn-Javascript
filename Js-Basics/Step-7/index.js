let name = 'Nitish'; //string literal
let age = 20; //number literal

//person is obeject with property name and age
let person = {
    name:'rajan',
    age:20
};

//changing property of objects->dot notations
person.name = 'john';  //easy and default choice

//changing property of objects->Bracket notations
person['name'] = 'sakshi'; //bit complex used when property is known at runtime
/*
for example => will learn later
let selection = 'name';
person[selection] = ['rohit'];
*/

console.log(person);
