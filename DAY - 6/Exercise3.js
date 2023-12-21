// 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
countries.push('dubai');
console.log(countries)
countries.unshift('iran');
console.log(countries);
// 2
const sortedCountries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
console.log(sortedCountries.sort());
// 3
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
  console.log(webTechs.sort());
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
  console.log(mernStack.sort());
  // 4
  let can = sortedCountries.filter(find => find.includes('land'));
  console.log(can);
  // 5
  for(let ta =0;ta<5;ta++){
    my = sortedCountries[ta].length;
    lo = sortedCountries[ta];
  }
  console.log(lo)
  // 6
  let cans = sortedCountries.filter(find => find.includes('land'));
  console.log(cans);
  // 7
  
  for(let ta =0;ta<11;ta++){
    my = sortedCountries[ta].length;
    to = sortedCountries[ta]
  }
  for(let ta =0;ta<10;ta++){
    my = sortedCountries[ta].length;
    too = sortedCountries[ta]
  }
  console.log(`[${to},${too}]`)
  // 8
  let ho = sortedCountries.filter(find => find.includes('ya'));
  console.log(ho);
//9
let rever =[];
for(let rev = sortedCountries.length-1;rev>=0;rev--){
    rever.push(sortedCountries[rev]);
}
console.log(rever)


