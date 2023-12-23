console.log('Exercise 1️⃣ >>');
// 1
function full(){
    firstn = 'muhammad';
    return firstn;
}
console.log(full());
// 2
function fulls(firstname,lastname){
    return (firstname+lastname);
}
console.log(fulls('muhammad','abdullah'));
// 3
function add(number1,number2){
  let sum = (number1+number2);
  return sum;
}
console.log(add(10,20));
// 4
function arearect(length,width){
 let area = (length*width);
 return area;
}
console.log(arearect(10,20));
// 5
function peri(len,wid){
 let per = 2*(len+wid);
 return per;
}
console.log(peri(10,20));
// 6
function volume(len,wid,hei){
    let rect = (len*wid*hei);
    return rect;
}
console.log(volume(10,20,30));
// 7
function area(r){
    let area = (Math.PI*r*r);
    return area;
}
console.log(area(10));
// 8
function circumference(r){
    let circle = (2*Math.PI*r);
    return circle;
}
console.log(circumference(20));
// 9
function density(mass,volume){
  let den = (mass/volume);
  return den;
}
console.log(density(20,20))
// 10
function car(distance,time){
    let speed = (distance/time);
    return speed;
}
console.log(car(50,2)+''+'mph');
// 11
function weight(mass,gravity){
    return (mass*gravity);
}
console.log(weight(10,5)+''+'kg');
// 12
function cal(oc,of){
    let sum = ((oc*9/5)+32);
    return sum;
}
console.log(cal(2,20)+''+'fahrenheit');
// 13
function bmi(weight,height){
    height = height/100;
    let calculate =  weight/(height*height);
    return calculate;
}
console.log(`THE  MEN BMI IS : ${bmi(85,175)}`);
console.log(`THE  WOMEN BMI IS : ${bmi(50,150)}`);
if(bmi(10,175) < 18.5){
    console.log('underweight');
}
else if(bmi(60,175) >= 18.5 && bmi(60,175) <= 24.9){
    console.log('normalweight');
}
else if(bmi(85,175) >= 25 && bmi(60,175) <= 29.9){
    console.log('overweight')
}
else {
    console.log('Obese')
}
// 14
/*
January, February, March, April, May, June, July, August, September, October, November, and December.

*/
function checkSeason(month){
let spring = [3, 4, 5];
let summer = [6, 7, 8];
let autum = [9, 10, 11];
let  winter = [12, 1, 2];

if (spring.includes(month)) {
    return "Spring";
  } else if (summer.includes(month)) {
    return "Summer";
  } else if (autum.includes(month)) {
    return "Autumn";
  } else {
    return "Winter";
  }
}
let month = 10;
console.log(checkSeason(month));
// 15
function find(a,b,c){
 let max =((a > b) ? (a > c ? a : c) : (b > c ? b : c));
   return max;
 }
console.log(find(10,20,30))
// END OF EXERCISE ONE ;

