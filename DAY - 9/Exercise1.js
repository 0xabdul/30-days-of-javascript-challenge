console.log('EXERCISE 1️⃣');
// 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// for each 
countries.forEach((set) => console.log(set));
// map
let map = names.map((mal) => mal+mal);
console.log(map)
// filter
let fill = countries.filter((fil) => fil.includes('land'));
console.log(fill);
// find
let red = numbers.reduce((a,b) => a+b);
console.log(red);
// 2
// call back function 
const num = (numbers) =>{
    return numbers + numbers
}
console.log(numbers);

// 3
countries.forEach((fi) => console.log(fi));
// 4
names.forEach((na) => console.log(na));
// 5
numbers.forEach((num) => console.log(num));
numbers.forEach((num) => console.log(num+num));
// 6
let upper = countries.map((up) => up.toUpperCase());
console.log(upper)
// 7
let len = countries.map((le) => le.length);
console.log(len)
// 8 square values : 1^2 = 2 2^2 = 4 3^
let sq = numbers.map((nu) => nu+nu);
console.log(sq);
// 9
let up = names.map((up) => up.toUpperCase());
console.log(up)
// 10
let cor = products.map((pro) => pro.price < 8);
console.log(cor)
// 11
let fills = countries.filter((fil) => fil.includes('land',));
console.log(fills);
// 12
let fin = countries.filter((fi) => fi.length < 7);
console.log(fin);
// 13 print the six letters and seven letters in country array
let fins = countries.filter((fi) => fi.length < 8);
console.log(fins);
// 14 there is no country start with 'E'
let ins = countries.filter((ji) => ji.includes('E') );
console.log(ins);
// 15
let co = products.filter((po) => po.price < 6);
console.log(co)
// 16
function getStringLists(){
}
console.log(getStringLists())
// 17
let redu = numbers.reduce((a,b) => a+=b);
console.log(`THE SUM OF ALL NUMBERS IN NUMBERS[ARRAY] IS : ${redu}`);
// 18
let concat = countries.reduce((a,b) => a,'Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries');
console.log(concat);
// 20
let so = names.some((som) => som == 'Brook');
console.log(so)
// 21
let ev = countries.every((um) => um == 'Norway');
console.log(ev)
// 22
let v = numbers.find((fi)=> fi > 8);
console.log(v);
let r = names.findIndex((h) => h.length < 6);
console.log(r)
// 23
let a = countries.find((gh) => gh.length < 7);
console.log(a);
// 24
let b = countries.findIndex((nu) => nu.length < 7);
console.log(b);
// 25
let no = countries.findIndex((li) => li < 7);
console.log(no)
// 26
let nos = countries.findIndex((li) => li < 7);
console.log(nos)
// END OF EXERCISE ONE 