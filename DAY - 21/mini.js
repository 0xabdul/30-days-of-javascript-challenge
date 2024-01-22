// <.......LEVEL 3.......  >

console.log('EXERCISE 3️⃣');

// 1
let text = document.querySelectorAll('h1');
text.forEach((ele) =>{
ele.style.fontSize = '3rem'
ele.style.textAlign ='center'
})
let tex = document.querySelectorAll('h2');
tex.forEach((ele) =>{
ele.style.fontSize = '2rem'
ele.style.textAlign ='center'
})
let te = document.querySelectorAll('p');
te.forEach((ele) =>{
ele.style.fontSize = '1.3rem'
ele.style.backgroundColor = 'pink'
ele.style.textAlign ='center'
ele.style.padding = '1rem'
})
let on = document.querySelectorAll('h3');
on.forEach((ele) =>{
ele.style.fontSize = '1.3rem'
ele.style.textAlign ='center'
ele.style.backgroundColor = 'green'
ele.style.padding = '1rem'
ele.style.color = 'white'
})
let ongo = document.querySelectorAll('h4');
ongo.forEach((ele) =>{
ele.style.fontSize = '1.3rem'
ele.style.textAlign ='center'
ele.style.backgroundColor = 'yellow'
ele.style.padding = '1rem'
})
let time = document.querySelectorAll('h5');
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let data = new Date();
document.getElementsByTagName('h5').innerHTML = col
let col = month[data.getMonth()];
let day = data.getDay()
let hour = data.getHours()
let minutes = data.getMinutes()
let seconds =  data.getSeconds()
function changeYearColor() {
    const yearElement = document.querySelectorAll('h1');
    setInterval(() => {
      const randomColor = getRandomColor();
      yearElement.style.color = randomColor;
    }, 1000);
  }
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
changeYearColor()
getRandomColor()
time.forEach((it)=>{
it.style
})