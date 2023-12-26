console.log('EXERCISE 1️⃣');
// 1
const empty = new Set();
console.log(empty);
// 2
const arr = [0,1,2,3,4,5,6,7,8,9,10];
for(let ar of arr){
    console.log(ar)
}
// 3
const countries = ['Finland', 'Sweden', 'Norway'];
let se = new Set(countries);
console.log(se.delete('Finland'));
console.log(se);
// 4
se.clear();
console.log(se);
// 5
const ne = new Set();
ne.add('Apple');
ne.add('Orange');
ne.add('Peer');
ne.add('Grapes');
ne.add('Banana');
console.log(ne);
// 6
const country = ['iceland', 'Sweden', 'Norway'];
const cr = new Map(country);
console.log(cr.size);

// END OF EXERCISE ONE