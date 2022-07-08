let radius = 1;
let x = 1;
let y = 1;

const circle = {
    radius : 1,
    location: {
        x:1,
        y:1
    },
    isVisible:true,
    draw: function(){
        console.log('draw');
    }
};

circle.draw();
 

//constructor function 
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);

