var current = new Date();

let hour = current.getHours();;

if (hour>= 6 && hour < 12){
    console.log('Good Morning');
}
else if (hour>=12 && hour <18){
    console.log('Good Afternoon');
}
else if(hour>=18 && hour<24){
    console.log('Good Evening');
}
else 
    console.log('Good night')
