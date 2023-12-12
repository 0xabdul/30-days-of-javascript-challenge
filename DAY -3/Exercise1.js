console.log('exercise one >>');
// firstName, lastName, country, city, age, isMarried, year
const firstName = 'muhummad';
const lastName = 'abdul';
let country = 'india';
let city = 'banglore';
let age = 20;
let isMarried = true;
let year = 2025;
console.log(typeof(firstName),typeof(lastName),typeof(country),typeof(city),typeof(age),typeof(isMarried),typeof(year));
console.log(typeof(10)== 10);
console.log(parseInt(9.8)== 10);
// true values
console.log('true statements :')
const pen = 15; 
console.log(pen > 10);
console.log(parseInt(10)== 10);
console.log(Math.round(9.8)==10);
// false values
console.log('false statements :')
const vote = 18;
console.log(vote > 20);
console.log(parseFloat(5.4)== 10);
console.log(Math.ceil(9.8)==9);
// < ........ >
console.log('comparison expression :')
console.log(4 > 3);
console.log(4>= 3)
console.log(4< 3);
console.log(4<= 3);
console.log(4== 4)
console.log(4=== 4);
console.log(4!= 4);
console.log(4!== 4);
console.log(4!= '4');
console.log(4== '4');
console.log(4=== '4');
// find the lenght of python and jargon 
console.log('falsey length :');
let  a = 'python';
     b = 'jargon';
console.log(a.length !== b.length)
// <......))
console.log('following expressions first without using console.log().');
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
let inc = 'python'&&'dragon';
console.log(inc.includes('on'));
let years = new Date();
    month = new Date();
    date =  new Date();
    hours = new Date();
    minutes = new Date();
    time = new Date();
console.log(years.getFullYear())
console.log(month.getMonth())
console.log(date.getDate())
console.log(hours.getHours())
console.log(minutes.getMinutes())
console.log(time.getTime())

