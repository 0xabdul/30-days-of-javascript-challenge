console.log('Exercise 2️⃣ >>');
// 1
function Linearequation(a,b,c,x,y){
 let solveLinEquation = (a*x+b*y+c);
 return solveLinEquation;
}
console.log(Linearequation(1,2,3,4,5));
// 2
function Quadraticequation(a,b,c,x,y){
    let solveQuadEquation = (a*x*2+b*y+c);
    return solveQuadEquation;
   }
   console.log(Quadraticequation(1,4,4,4,4));
// 3
function printArray(one){
 for(let i = 0;i<one.length;i++){
   console.log(one[i]);
 }
}
let arr =[1,2,3,4,5];
printArray(arr);
// 4
function up(){
  let day = new Date();
  let date = day.getDate();
  let month = day.getMonth()+1;
  let year = day.getFullYear();
  let hour = day.getHours();
  let time = day.getMinutes();
  let full = (`${date}/${month}/${year}/${hour}:${time}`);
  return full;
}
console.log(up());
// 5
function swapValues(a,b){
  let temp = a;
  a = b;
  b = temp;
  sum = (`${a} => ${b}`);
  return sum;
}
console.log(swapValues(1,2));
// 6
function rev(arr){
  let arrs = [];
  for(let p=arr.length-1;p>=0;p--){
  arrs.push(arr[p]);
  }
  return arrs;
}
console.log(rev([1,2,3,4,5]))
console.log(rev(['a','b','c','d','e']));
// 7
function capitalizeArray(array){
  let capitalizedarray = [];
  for(let m =0;m<=array.length;m++){
  capitalizedarray.push(array[m]);
  }
  let sum = capitalizdarray.map(str =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  return capitalizedarray;
}
console.log(capitalizeArray(['a','b','c']));
// 8
function addItem(item) {
  let newArray = [];
  if (Array.isArray(item)) {
    newArray = item.slice(); 
  } else {
   
    newArray.push(item);
  }
  return newArray;
}
let existingArray = [1, 2, 3];
let newItem = 4;
let resultArray = addItem(existingArray,newItem);
console.log(resultArray); 
// 9
function removeItem(array, index) {
  let newArray = array.slice(0, index).concat(array.slice(index + 1));
  return newArray;
}
let originalArray = [1, 2, 3, 4, 5];
let indexToRemove = 2;
let newArray = removeItem(originalArray, indexToRemove);
console.log(newArray);
// 10
function sumOfNumbers(num){
  let sum =0;
  for(let j=0;j<=num;j++){
     sum +=j;
  }
  return sum;
}
console.log(sumOfNumbers(5))
// 11
function sumOfodds(num){
  let sum =0;
  for(let j=0;j<=num;j+=3){
     sum +=j;
     
  }
  return sum;
}
console.log(sumOfodds(5));
// 12
function sumOfeven(num){
  let sum =0;
  for(let j=0;j<=num;j+=2){
     sum +=j;
     
  }
  return sum;
}
console.log(sumOfeven(5));
// 13
function evensAndOdds(integer){
  let even = 0;
  let odd = 0;
  const numString = integer.toString();
  for(u=0;u<numString.length;u++){
    const digit = parseInt(numString[u]);
    if (digit % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  console.log(`The number of odds are ${odd}.`);
  console.log(`The number of evens are ${even}.`);
  }
evensAndOdds(100);
// 14
function sumr(a,b,c){
  let sums = (a+b+c)
  return sums;
}
console.log(sumr(1,2,3));
// 15
function random(){
  let numb1 = (Math.floor(Math.random()*100));
  let numb2 = (Math.floor(Math.random()*50));
  let numb3 = (Math.floor(Math.random()*500));
  console.log(`${numb1}.${numb2}.${numb3}`);
}
random();
// 16
function ran(){
  let str = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let one1 = (Math.floor(Math.random()*str.length));
  let one2 = (Math.floor(Math.random()*str.length));
  let one3 = (Math.floor(Math.random()*str.length));
  let one4 = (Math.floor(Math.random()*str.length));
  let e = str[one1]+str[one2];
  let v = str[one2]+str[one3];
  let s = str[one3]+str[one4];
  console.log(`${e}:${v}:${s}`)
}
ran();
// 17
function hex(){
let decsi = 'abcdefghijklmnopqrstuvwxyz1234567890';
let rando = (Math.floor(Math.random()*decsi.length));
let rando1 = (Math.floor(Math.random()*15));
let rando2 = (Math.floor(Math.random()*10));
let rando3 = (Math.floor(Math.random()*5));
let rando4 = (Math.floor(Math.random()*3));
let con = decsi[rando];
let con1 = decsi[rando1];
let con2 = decsi[rando2];
let con3 = decsi[rando3];
let con4 = decsi[rando4];
console.log(`#${con}${con1}${con2}${con3}${con4}`);
}
hex();
// 18
function user(){
let word = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let a = (Math.floor(Math.random()*20)); 
  let b = (Math.floor(Math.random()*15));
  let c = (Math.floor(Math.random()*10));
  let d = (Math.floor(Math.random()*5));
  let e = (Math.floor(Math.random()*3));
  let aa = word[a];
  let bb = word[b];
  let cc = word[c];
  let dd = word[d];
  let ee = word[e];
  console.log(`${aa}${cc}${bb}${aa}${ee}${cc}${dd}`);
}
user();
// END OF EXERCISE TWO ;
