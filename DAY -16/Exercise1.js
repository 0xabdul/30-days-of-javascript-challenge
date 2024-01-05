console.log('EXERCISE 1️⃣');
// 1 
// in skills array conver json data
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];
let obj = JSON.stringify(skills,undefined,4);
console.log(obj);

// 2
let age = 250;
let ob = JSON.stringify(age);
console.log(ob);

// 3
let isMarried = true;
let o = JSON.stringify(isMarried);
console.log(o);

// 4
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
let objec = JSON.stringify(student,undefined,4);
console.log(objec)

// END OF EXERCISE ONE