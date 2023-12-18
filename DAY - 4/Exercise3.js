// console.log("Exercise third >>")
// There are 7 months in a year having 31 days namely January, March, Mcase 'March'ay, July, August, October, and December. 
// here are 4 months in a year having 30 days namely April, June, September, and November.
// The month of February has the least number of days. 28 days
/*let months = prompt("Enter The Month Name :");
let g = months.toLowerCase();
let b = months.toUpperCase();
switch(months){
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'december':
  case 'october':{
    alert(`${months} has a 31 days`);
  }
  case 'april':
  case 'june':
  case 'september':
  case 'november':{
    alert(`${months} has a 30 days`);
  }
  case 'february':{
    alert(`${months} has a 28 days`);
  }
  
}*/
let year = prompt('enter the year');
if (year % 2 == 0){
    alert(`${year} this is a leap year`)
}
else{
    alert(`${year} this is a  not leap year`);
}
