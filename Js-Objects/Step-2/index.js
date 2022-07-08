const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function(){}


delete circle.color; //can delete a function  beacause circle is constant so we cant change it,but can change its method

console.log(circle);
