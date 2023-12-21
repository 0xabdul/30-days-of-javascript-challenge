// 1
// for loop 0 to 10
for(a=0;a<=10;a++){
    console.log(a)
}
// while loop 0 to 10
let u = 0;
while(b<=10){
    console.log(u)
    b++
}
// do-while loop 0 to 10
let c = 0;
do{
    console.log(c);
    c++;
}while(c<=10)
// 2
// for loop 10 to 0
for(d=10;d<=0;d++){
    console.log(d)
}
// while loop 0 to 10
let e = 10;
while(e<=0){
    console.log(e)
    e++
}
// do-while loop 0 to 10
let f = 10;
do{
    console.log(f);
    f++;
}while(f<=0)
// 3
// using for loop print 0 to n numbers
for(g=0;g<=10;g--){
    console.log(g)
}
// 4
for(let h=0;h<=10;h++){
let i = '';
for(let j=0;j < h;j++){
i += '#';
}
console.log(i)
}
// 5
let l = 'i';
let m = 'i^2';
let n = 'i^3';
console.log(` ${l} ${m} ${n}`)
for(let k=0;k<=10;k++){
  console.log(` ${k}  ${k*k}   ${k*k*k}`)
}
// 6
for(let o = 0;o<=100;o++){
    if(o%2==0){
        console.log(`${o}`)
    }
}
// 7
for(let o = 0;o<=100;o++){
    if(o%3==0){
        console.log(`${o}`)
    }
}
// 8
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
// 9
for(let r = 0;r<=100;r++){
    console.log(`${100*50.5}`)
}
// 11
let a= 0;
let b=0;
let arr =[2550,2500]
for(let o = 0;o<=100;o++){
    if(o%2==0){
       b +=o
    }
    else {
     a += o  
    }
}
console.log(`${b} , ${a}`)
console.log(arr)
// 12
let t = [];
for(let i=0;i<5;i++){
t.push(Math.ceil(Math.random()*50));}
console.log(t)
// 13
let number = 'abcdefghijklmnopqrstuvwxyz1234567890';
let Id = '';
for(let k=0;k<6;k++){
let g = (Math.ceil(Math.random()*number.length));
Id = number.charAt(g);
console.log(Id)
}   


