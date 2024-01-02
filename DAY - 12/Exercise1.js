console.log('EXERCISE 1️⃣');
// 1
let person = 4000;
let month = person*12;
let bonus = month + 10000;
let onlinecourses = 5500;
let permonthonline = onlinecourses*12+bonus;
console.log(`the Person annual income is : ${permonthonline}`);
// 2
let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
let so = points.map(Number).sort((a,b)=>a-b);
console.log(so);
console.log(so.length+points.length-1);
// 3
let pa =/_+/;
let nam = 'first_name';
let tests  = pa.test(nam);
console.log(tests);

// END OF EXERCISE ONE 