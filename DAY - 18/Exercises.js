// <.......LEVEL 1.......  >

console.log('EXERCISE 1️⃣');

// 1 
let url ='https://restcountries.com/v2/all';
fetch(url)
.then(response => response.json())
.then(data =>{
for(let{name, capital, languages, population,area}of data){
    console.log(`name: ${name}, capital: ${capital},population: ${population},area: ${area}`)
    console.log(languages);
}
});


// <.......LEVEL 2.......  >

console.log('EXERCISE 2️⃣');

// 1

let link = 'https://api.thecatapi.com/v1/breeds';
fetch(link)
.then(response=>response.json())
.then(data=>{
let map  = data.map((i)=> i.name);
console.log(map)
})


// <.......LEVEL 3.......  >

console.log('EXERCISE 3️⃣');

// 1
let api = 'https://api.thecatapi.com/v1/breeds';
fetch(api)
.then(response=>response.json())
.then(data=>{
let map = data.filter((o)=> o.weight.metric.includes("3 - 5"));
console.log(map)
})



// 2
let ap = 'https://restcountries.com/v2/all';
fetch(ap)
.then(response=>response.json())
.then(data=>{
    const sortedCountries = data.sort((a, b) => b.area - a.area);
    const top10LargestCountries = sortedCountries.slice(1, 11);
for(let{name,population}of top10LargestCountries){
    console.log(`country name: ${name},population:${population}`)
}
})



// 3
let link = 'https://restcountries.com/v2/all';
fetch(link)
.then(response=>response.json())
.then(data=>{
    const allLanguages = [];
    data.forEach(country => {
      const languages = country.languages || [];
      languages.forEach(language => {
        if (!allLanguages.includes(language)) {
          allLanguages.push(language);
        }
      });
    });
    const totalLanguages = allLanguages.length;
    console.log('Total number of unique languages in the world:', totalLanguages);
})

// END OF ALL EXERCISES
