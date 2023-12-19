
// 1
let arr = [];
console.log(arr);
// 2
let num = [1,2,3,4,5,6,7,8,9,10];
console.log(`the array elements : ${num}`)
// 3
let n = num.length;
console.log(`the lenght  of array is : ${n}`)
// 4
const webTech = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  let b = webTech[0]
  let a = webTech[3]
  let x = webTech[6]
console.log(`the first items : ${b}`)
console.log(`the middle items : ${a}`)
console.log(`the last items : ${x}`)
// 5
let mixeddatatypes = [1,2,3,4,5,1.5,2.0,'a','b','c','d']
let len = mixeddatatypes.length;
console.log(`the lenght of mixeddatatypes : ${len}`)
// 6
let  itCompanies = ["Facebook", "Google","Microsoft","Apple", "IBM", "Oracle", "Amazon"]
// 7
console.log(`the it companies are : ${itCompanies}`)
// 8
let it = itCompanies.slice(0,6);
console.log(it)
// 9
let first = itCompanies[0]
let middle = itCompanies[3]
let last = itCompanies[6]
console.log(`the first company : ${first}`)
console.log(`the middle company : ${middle}`)
console.log(`the last company : ${last}`)
// 10
let one = itCompanies.slice(0,6)
console.log(one)
// 11
let upper = itCompanies.map((al) => al.toUpperCase())
console.log(upper)
// 12
let  sen = ["Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies"]
console.log(sen.toString())
// 13
if (itCompanies === -1){
    console.log(`it exist return the company`)
}
else {
    console.log(`return a company is not found`)
}
// 14
let s1 = itCompanies.slice(0,1)
let s2 = itCompanies.slice(1,2)
let s3 = itCompanies.slice(2,3)
let s4 = itCompanies.slice(3,4)
let s5 = itCompanies.slice(4,5)
let s6 = itCompanies.slice(5,6)
console.log(`${s1},${s2},${s3},${s4},${s5},${s6}`)
// 15
let short = itCompanies.sort();
console.log(`the short array is : ${short}`)
// 16
let rev = itCompanies.reverse();
console.log(`the reverse array is : ${rev}`)
// 17
let s = itCompanies.slice(0,3)
console.log(`the first companies are : ${s}`)
// 18
let sl = itCompanies.slice(4,7)
console.log(`the last companies are : ${sl}`)
// 19
let sli = itCompanies.slice(2,5)
console.log(`the middle companies are : ${sli}`)
// 20
let  itCompaniess = ["Facebook", "Google","Microsoft","Apple", "IBM", "Oracle", "Amazon"]
itCompaniess.shift();
console.log(itCompaniess)
// 21
let slic = itCompaniess.slice(3,4)
console.log(slic)
// 22
itCompaniess.pop();
console.log(itCompaniess);
// 23
console.log(itCompaniess.splice())