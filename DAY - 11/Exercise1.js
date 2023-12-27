console.log('EXERCISE 1️⃣');
// 1
const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp]= constants;
console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp);
// 2
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
let[fin, est, sw, den, nor]=countries;
console.log(fin,est,sw,den,nor);
// 3
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  };
let[wid,hei,are,peri]=rectangle;
console.log(wid,hei,are,peri);
let ass = Object.keys(rectangle);
console.log(ass);


// END OF EXERCISE ONE