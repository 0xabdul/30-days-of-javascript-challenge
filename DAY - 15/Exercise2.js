console.log('EXERCISE 2️⃣');
// 1
class student{
constructor(firstname,lastname){
    this.firstname = firstname;
    this.lastname=lastname;
}
}
class animal extends student{
    constructor(name, age, color, legs){
        this.name=name;
        this.age = age;
        this.color=color;
        this.legs=legs;
    
    }
    person(){
        console.log('hello this is parent class');
        let per = `${firstname},${lastname}`
      return per;
    }
}
let ob = new student('muhammad','abdullah');
console.log(ob.person());

// ENS OF EXERCISE TWO
