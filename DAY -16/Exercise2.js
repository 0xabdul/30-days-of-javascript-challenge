console.log('EXERCISE 2️⃣');

// 1
const students = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
let fill = JSON.stringify(students,['firstName','lastName','skills'],4)
console.log(fill);

// END OF EXERCISE TWO