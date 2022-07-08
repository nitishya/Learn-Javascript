//Factory Fun ction 
function createCircle(radius){
    return {
       radius,   //equivalent to => radius : radius,
        
       draw(){
            console.log('draw');
        }
    }; 
}

const circle1 = createCircle(1);
console.log(circle1);


const circle2 = createCircle(12);
console.log(circle2);
