console.log('EXERCISE 1️⃣');
// 1
const dog ={};
// 2
console.log(dog);
// 3
const dogs ={
   Name : 'german',
   legs : 'four',
   colour : 'black',
   age : 'Ten',
   bark : 'wooff',
}
console.log(`${dogs.Name},${dogs.legs},${dogs.colour},${dogs.bark}`);
// 4
const dogss ={
    Name : 'german',
    legs : 'four',
    colour : 'black',
    age : 'Ten',
    bark : 'wooff',

getdogs :function (){
    return `${this.Name},${this.legs},${this.colour},${this.bark}`
}
}
const copydogs = Object.assign({}, dogss)
console.log(copydogs);
// 5
dogss.breed = 'american';
dogss.getDogInfo = 'noraml';
const copydog = Object.assign({}, dogss)
console.log(copydog);

// END OF EXERCISE ONE ;

