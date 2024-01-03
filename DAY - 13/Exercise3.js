console.log('EXERCISE 3️⃣');
// 1
// while loop
console.time('while loop speed')
let a = 0;
while(a<5){
    a++
    console.log(a)
}
console.timeEnd('while loop speed')
// do-while loop
console.time('do-while loop speed')
let b = 0;
do{
    b++
    console.log(b)
}while(b<5)
console.timeEnd('do-while loop speed')
// for loop
console.time('for loop speed')
for(let i = 0;i<5;i++){
    console.log(i)
}
console.timeEnd('for loop speed')
// for each
console.time('for each speed')
let arr = ["a","b","c"]
arr.forEach(element => {
    console.log(element)
});
console.timeEnd('for each speed')