/*console.log('exercise two >>');
// height of the triangle and calculate an area of a triangle 
let b = prompt('enter the base');
let  h = prompt('enter the height');
let  area =(0.5*b*h);
alert('The area of the triangle :'+' ' + area);
// the triangle and and calculate the perimeter of triangle 
let x = prompt('enter the side a');
let y = prompt('enter the side b ');
let z = prompt('enter the side c');
let my =parseInt(x+y+z);
alert('The perimeter of the triangle is :'+' ' + my);
// area of rectangle
const len = prompt('enter the length');
const width = prompt('enter the width');
let areas = (len*width);
alert('the area of the rectangle :'+' '+ areas);
let perimeter = 2*(len+width);
alert('the perimeter is :'+' '+ perimeter);
// area of circle
const pi = 3.14;
const r = prompt('enter the r');
let circle = (pi*r*r);
alert('the area of the circle :'+' '+ circle);
let circumference =(2*pi*r);
alert('the perimeter is :'+' '+ circumference);
// slop
const x_inter = 0;
const y_inter = 2*-2;
let hour = prompt('enter the hours');
let rate_per_hour = prompt('enter the hours');
let result = hour*rate_per_hour;
alert(`the ans is :${result}`);
// if else
let user = prompt('enter your name');
if (user > 7) {
    alert('your name is long')
}
else{
    alert('your name is short')
}
// <.......>
let first = 'muhammad';
let last = 'abdullah';
console.log(`Your first name ${first},longer than your family name ${last}`);
// age
let myAge = 30
    yourAge = 15
console.log(`I am ${myAge-yourAge} years older than you.`)
// /////////////////
de = new Date();
let yearss = de.getFullYear() - parseInt(prompt('Enter birth year:'))
if (yearss >= 18){
    alert(`You are ${yearss} You are old enough to drive`)
}
else{
    alert(`You are ${yearss} not allowed to drive`)
}
// your lived
let pr =parseInt(prompt('Enter number of years you live:'))
let cal = (365*24*60*60);
alert(`You lived ${cal} Seconds`);*/
// 
console.log(`YYYY-MM-DD HH:mm format :`)
let defalut = new Date();
console.log(defalut.getFullYear()+'/'+defalut.getMonth()+'/'+defalut.getDate()+'/'+defalut.getHours()+'/'+defalut.getSeconds())
console.log(`DD-MM-YYYY HH:mm format :`)
console.log(defalut.getDate()+'/'+defalut.getMonth()+'/'+defalut.getFullYear()+'/'+defalut.getHours()+'/'+defalut.getSeconds())