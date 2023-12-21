// 1
let str = 'abcdefghijklmnoptqrstuvwxyz1234567890';
let b = '';
for(let f =0;f<10;f++){
let m =(Math.floor(Math.random()*37));
b += str.charAt(m);
console.log(b)
}
// 2
let hex = '0123456789ABCDEF';
let sp = '#';
for(let s =0;s<8;s++){
let y=(Math.floor(Math.random()*hex.length));
sp +=hex.charAt(y);
console.log(sp)
}
// 3
for(let y =0;y<8;y++){
arr = (Math.floor(Math.random()*500));
arrs = (Math.floor(Math.random()*200));
ae = (Math.floor(Math.random()*100));}
console.log(`rgb(${arr},${arrs},${ae})`)
// 4
let newarray = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
console.log(newarray)
// 5
console.log(`[${newarray[0].length},${newarray[1].length},${newarray[2].length},${newarray[3].length},${newarray[4].length},${newarray[5].length},${newarray[6].length},${newarray[7].length},${newarray[8].length},${newarray[9].length},${newarray[10].length}]`);
// 6
console.log(`[`);
console.log(`['${newarray[0]}',${newarray[0].slice(0,3)},${newarray[0].length}]`);
console.log(`['${newarray[1]}',${newarray[1].slice(0,3)},${newarray[1].length}]`);
console.log(`['${newarray[2]}',${newarray[2].slice(0,3)},${newarray[2].length}]`);
console.log(`['${newarray[3]}',${newarray[3].slice(0,3)},${newarray[3].length}]`);
console.log(`['${newarray[4]}',${newarray[4].slice(0,3)},${newarray[4].length}]`);
console.log(`['${newarray[5]}',${newarray[5].slice(0,3)},${newarray[5].length}]`);
console.log(`['${newarray[6]}',${newarray[6].slice(0,3)},${newarray[6].length}]`);
console.log(`['${newarray[7]}',${newarray[7].slice(0,3)},${newarray[7].length}]`);
console.log(`['${newarray[8]}',${newarray[8].slice(0,3)},${newarray[8].length}]`);
console.log(`['${newarray[9]}',${newarray[9].slice(0,3)},${newarray[9].length}]`);
console.log(`['${newarray[10]}',${newarray[10].slice(0,3)},${newarray[10].length}]`);
console.log(`]`);
// 7
if(newarray[5].includes('LAND')||newarray[8].includes('LAND')){
    console.log('the two contry are include land :',newarray[5],newarray[8]);
}
else if(newarray[0].includes('LAND')||newarray[1].includes('LAND')||newarray[2].includes('LAND')||newarray[3].includes('LAND')||newarray[4].includes('LAND')||newarray[6].includes('LAND')||newarray[7].includes('LAND')||newarray[9].includes('LAND')||newarray[10].includes('LAND')){
    console.log('the EIGHT contry are not include land :',newarray[0],newarray[1],newarray[2],newarray[3],newarray[4],newarray[6],newarray[7],newarray[9],newarray[10]);
}
else{
    console.log('cannot access the newarray')
}
// not includes 'land'
console.log('the EIGHT contry are not include land :',newarray[0],newarray[1],newarray[2],newarray[3],newarray[4],newarray[6],newarray[7],newarray[9],newarray[10]);

// 8
if(newarray[0].includes('IA')||newarray[1].includes('IA')||newarray[4].includes('IA')){
    console.log('the three contry are include IA :',newarray[0],newarray[1],newarray[4]);
}
else if(newarray[2].includes('IA')||newarray[3].includes('IA')||newarray[5].includes('IA')||newarray[6].includes('IA')||newarray[7].includes('IA')||newarray[8].includes('IA')||newarray[9].includes('IA')||newarray[10].includes('IA')){
    console.log('the SEVEN contry are not include IA :',newarray[2],newarray[3],newarray[5],newarray[6],newarray[7],newarray[8],newarray[9],newarray[10]);
}
else{
    console.log('cannot access the newarray')
}
// not includes 'IA'
console.log('the SEVEN contry are not include IA :',newarray[2],newarray[3],newarray[5],newarray[6],newarray[7],newarray[8],newarray[9],newarray[10]);
// 9
let maxLength = 0;
 for (let i = 0; i < 11; i++) {
    if (newarray[i].length > maxLength) {
        maxLength = newarray[i].length;
        longestCountry = newarray[i];
    }
}
console.log("The country with the most characters is: " + longestCountry);
// 10
 for (let i = 0; i < 11; i++) {
    if (newarray[i].length > 0) {
        short = newarray[i];
    }
}
    for (let o = 0; o < 10; o++) {
        if (newarray[o].length > 0) {
            sh = newarray[o];
        }
}
console.log("The country with the five characters is: " + short + sh);
// 11
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
  let len = 0;
for(let p=0;p < 7;p++){
 if(cont = webTechs[p].length > len){
    len = webTechs[p].length;
    word = webTechs[p];
 }
}
console.log(`the biggest word is ${word}`);
// 12
 find = webTechs.map(fi => [fi,fi.length]);
console.log(`["${find}"]`);
// 13
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acc = mernStack.map(worl => worl);
console.log(acc)
// 14
for(let um=0;um<webTechs.length;um++){
    console.log(webTechs)
}
// 15
let rever =[];
let furit = ['banana', 'orange', 'mango', 'lemon'];
for(let rev = furit.length-1;rev>=0;rev--){
    rever.push(furit[rev]);
}
console.log(rever)
// 16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];
for(let lu=0;lu<2;lu++){
for(let um=0;um<fullStack[lu].length;um++){
    console.log(fullStack[lu][um].toUpperCase())
}
}



   
