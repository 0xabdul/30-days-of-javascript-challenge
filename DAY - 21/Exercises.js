// <.......LEVEL 1.......  >

console.log('EXERCISE 1️⃣');

// 1 
let so = document.getElementsByTagName('p')
console.log(so);

// 2
let query = document.querySelector('.container')
console.log(query)

// 3
let all = document.querySelectorAll('p')
console.log(all)

// 4
let sos = document.getElementsByTagName('p')
for(let i=0;i<sos.length;i++){
    console.log(sos[i])
}

// 5
let forth = document.getElementById('FourthParagraph')
forth.textContent = 'heloo';
console.log(forth)



// <.......LEVEL 2.......  >

console.log('EXERCISE 2️⃣');

// 1
let al = document.querySelectorAll('p')
al.forEach((all,i)=>{
all.style.fontSize = '5rem';
all.style.color = 'white'
all.style.backgroundColor = 'black'
all.style.textAlign = 'center'
all.style.fontFamily = 'sans'
})

// 2
let cl = document.querySelectorAll('p')
cl.forEach((ind,pra)=>{
if(ind % 2 == 0){
    pra.style.color = 'green';
}
else{
    pra.style.color = 'red';
}
})

// END OF EXERCISE LEVEL ONE AND TWO