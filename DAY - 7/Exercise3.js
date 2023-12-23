console.log('Exercise 3️⃣ >>');
// 2
function cont(){
let onemath = (Math.floor(Math.random()*500));
let twomath = (Math.floor(Math.random()*200));
let threemath = (Math.floor(Math.random()*100));
console.log(`rgb(${onemath},${twomath},${threemath});`);
}
cont();
// 3
function arrayOfHexaColors(num){
let arr = [];
for(let i=0;i<num;i++){
let ra ='#'+Math.floor(Math.random()*1234567890).toString(16);
    arr.push(ra);
}
return arr
}
let res = arrayOfHexaColors(5);
console.log(res)
// 4
function arrayOfRgbColors(red){
let w = [];
for(let y = 0;y<red;y++){
let n ='rgb('+Math.floor(Math.random()*1234567890).toString(27)+')';
   w.push(n);
}
return w;
}
let i = arrayOfRgbColors(3);
console.log(i)
// 8
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  }
  const originalArray = [1, 2, 3, 4, 5];
  const shuffledResult = shuffleArray(originalArray);
  console.log("Original Array:", originalArray);
  console.log("Shuffled Array:", shuffledResult);
  // 9
  function fact(num){
    let fact = 1;
    for (i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${num} is ${fact}.`);
}
fact(4);
// 11
function sum(numb){
let m = 0;
for(let q=0;q<=numb;q++){
     m += q 
}
console.log(`the sum of numbers is :${m}`);
}
sum(3)
// 14
function modifyArray(arr) {
    if (arr.length < 5) {
        return 'item not found';
    }
    arr[4] = 'modified value';
    return arr;
}
let myArray = [1, 2, 3, 4, 5, 6, 7];
let modifiedArray = modifyArray(myArray);
console.log(modifiedArray);
// 15
/*function d(num){
for(let l = 2;l<=num;num++){
    if(num % l == 0){
        console.log(`${num} is prime number`)
    }
    else{
        console.log(`${num} is  not prime number`)
    }
}
}
d(3);
*/
// 19
function hum(){
let arr= [];
for(let y=0;y<=8;y++){
let ran = Math.floor(Math.random()*10);    
    arr.push(ran);
}
return arr;
}
console.log(hum())
// 20
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
function rever(){
let re = countries.reverse();
return re;
}
console.log(rever());
// SO END OF EXERCISE THREE AND FINSHED DAY -7 FUNCTION ;

  
