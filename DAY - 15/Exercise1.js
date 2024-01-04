console.log('EXERCISE 1️⃣');
// 1
class animal{
    constructor(name, age, color, legs){
        this.name=name;
        this.age = age;
        this.color=color;
        this.legs=legs;
    }
}
let obj = new animal('lion',10,'black',4);
console.log(obj);
// 2
class dog{
    constructor(name, age, color, legs){
        this.name=name;
        this.age = age;
        this.color=color;
        this.legs=legs;
    }
}
class cat extends dog{
    constructor(name, age, color, legs){
        this.name=name;
        this.age = age;
        this.color=color;
        this.legs=legs;
    }
}
class animals extends cat{

}

let ob = new dog('german',5,'white',4);
console.log(ob)
let o = new cat('snowbell',3,'brown',4);
console.log(o);

// END OF EXERCISE ONE

