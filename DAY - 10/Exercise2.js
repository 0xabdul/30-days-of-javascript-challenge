console.log('EXERCISE 2️⃣');
// 1
//  creating array
const num1 = [0,1,2,3,4];
const num2 = [5,6,7,8,9,10];
const sum  = [...num1,...num2];
// create set 
let a = new Set(num1);
let b = new Set(num2);
let c = new Set(sum);
console.log(c);
// 2
let n1 = [0,1,2,3,4];
let n2 = [5,6,7,8,9,10];
let s1 = new Set(n1);
let s2 = new Set(n2)
let fill = n1.filter((fi)=> s2.has(fi));
console.log(fill);
// 3
let nn1 = [0,1,2,3,4];
let nn2 = [5,6,7,8,9,10,2,1,4];
let ss1 = new Set(nn1);
let ss2 = new Set(nn2)
let fills = nn1.filter((fi)=> ss2.has(fi));
console.log(fills);

// END OF EXERCISE TWO 


