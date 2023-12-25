console.log('EXERCISE 3️⃣');
// 1
const country = [
    {
      name: 'Afghanistan',
      capital: 'Kabul',
      languages: ['Pashto', 'Uzbek', 'Turkmen'],
      population: 27657145,
      flag: 'https://restcountries.eu/data/afg.svg',
      currency: 'Afghan afghani'
    },
    {
      name: 'Åland Islands',
      capital: 'Mariehamn',
      languages: ['Swedish'],
      population: 28875,
      flag: 'https://restcountries.eu/data/ala.svg',
      currency: 'Euro'
    },
    {
      name: 'Albania',
      capital: 'Tirana',
      languages: ['Albanian'],
      population: 2886026,
      flag: 'https://restcountries.eu/data/alb.svg',
      currency: 'Albanian lek'
    },
    {
      name: 'Algeria',
      capital: 'Algiers',
      languages: ['Arabic'],
      population: 40400000,
      flag: 'https://restcountries.eu/data/dza.svg',
      currency: 'Algerian dinar'
    },
    {
      name: 'American Samoa',
      capital: 'Pago Pago',
      languages: ['English', 'Samoan'],
      population: 57100,
      flag: 'https://restcountries.eu/data/asm.svg',
      currency: 'United State Dollar'
    },
    {
      name: 'Andorra',
      capital: 'Andorra la Vella',
      languages: ['Catalan'],
      population: 78014,
      flag: 'https://restcountries.eu/data/and.svg',
      currency: 'Euro'
    },
    {
      name: 'Angola',
      capital: 'Luanda',
      languages: ['Portuguese'],
      population: 25868000,
      flag: 'https://restcountries.eu/data/ago.svg',
      currency: 'Angolan kwanza'
    },
    {
      name: 'Anguilla',
      capital: 'The Valley',
      languages: ['English'],
      population: 13452,
      flag: 'https://restcountries.eu/data/aia.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Antarctica',
      capital: '',
      languages: ['English', 'Russian'],
      population: 1000,
      flag: 'https://restcountries.eu/data/ata.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Antigua and Barbuda',
      capital: "Saint John's",
      languages: ['English'],
      population: 86295,
      flag: 'https://restcountries.eu/data/atg.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Argentina',
      capital: 'Buenos Aires',
      languages: ['Spanish', 'Guaraní'],
      population: 43590400,
      flag: 'https://restcountries.eu/data/arg.svg',
      currency: 'Argentine peso'
    },
    {
      name: 'Armenia',
      capital: 'Yerevan',
      languages: ['Armenian', 'Russian'],
      population: 2994400,
      flag: 'https://restcountries.eu/data/arm.svg',
      currency: 'Armenian dram'
    },
    {
      name: 'Aruba',
      capital: 'Oranjestad',
      languages: ['Dutch', '(Eastern) Punjabi'],
      population: 107394,
      flag: 'https://restcountries.eu/data/abw.svg',
      currency: 'Aruban florin'
    },
    {
      name: 'Australia',
      capital: 'Canberra',
      languages: ['English'],
      population: 24117360,
      flag: 'https://restcountries.eu/data/aus.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Austria',
      capital: 'Vienna',
      languages: ['German'],
      population: 8725931,
      flag: 'https://restcountries.eu/data/aut.svg',
      currency: 'Euro'
    },
    {
      name: 'Azerbaijan',
      capital: 'Baku',
      languages: ['Azerbaijani'],
      population: 9730500,
      flag: 'https://restcountries.eu/data/aze.svg',
      currency: 'Azerbaijani manat'
    },
    {
      name: 'Bahamas',
      capital: 'Nassau',
      languages: ['English'],
      population: 378040,
      flag: 'https://restcountries.eu/data/bhs.svg',
      currency: 'Bahamian dollar'
    },
    {
      name: 'Bahrain',
      capital: 'Manama',
      languages: ['Arabic'],
      population: 1404900,
      flag: 'https://restcountries.eu/data/bhr.svg',
      currency: 'Bahraini dinar'
    },
    {
      name: 'Bangladesh',
      capital: 'Dhaka',
      languages: ['Bengali'],
      population: 161006790,
      flag: 'https://restcountries.eu/data/bgd.svg',
      currency: 'Bangladeshi taka'
    },
    {
      name: 'Barbados',
      capital: 'Bridgetown',
      languages: ['English'],
      population: 285000,
      flag: 'https://restcountries.eu/data/brb.svg',
      currency: 'Barbadian dollar'
    },
    {
      name: 'Belarus',
      capital: 'Minsk',
      languages: ['Belarusian', 'Russian'],
      population: 9498700,
      flag: 'https://restcountries.eu/data/blr.svg',
      currency: 'New Belarusian ruble'
    },
    {
      name: 'Belgium',
      capital: 'Brussels',
      languages: ['Dutch', 'French', 'German'],
      population: 11319511,
      flag: 'https://restcountries.eu/data/bel.svg',
      currency: 'Euro'
    },
    {
      name: 'Belize',
      capital: 'Belmopan',
      languages: ['English', 'Spanish'],
      population: 370300,
      flag: 'https://restcountries.eu/data/blz.svg',
      currency: 'Belize dollar'
    },
    {
      name: 'Benin',
      capital: 'Porto-Novo',
      languages: ['French'],
      population: 10653654,
      flag: 'https://restcountries.eu/data/ben.svg',
      currency: 'West African CFA franc'
    },
    {
      name: 'Bermuda',
      capital: 'Hamilton',
      languages: ['English'],
      population: 61954,
      flag: 'https://restcountries.eu/data/bmu.svg',
      currency: 'Bermudian dollar'
    },
    {
      name: 'Bhutan',
      capital: 'Thimphu',
      languages: ['Dzongkha'],
      population: 775620,
      flag: 'https://restcountries.eu/data/btn.svg',
      currency: 'Bhutanese ngultrum'
    },
    {
      name: 'Bolivia (Plurinational State of)',
      capital: 'Sucre',
      languages: ['Spanish', 'Aymara', 'Quechua'],
      population: 10985059,
      flag: 'https://restcountries.eu/data/bol.svg',
      currency: 'Bolivian boliviano'
    },
    {
      name: 'Bonaire, Sint Eustatius and Saba',
      capital: 'Kralendijk',
      languages: ['Dutch'],
      population: 17408,
      flag: 'https://restcountries.eu/data/bes.svg',
      currency: 'United States dollar',

    },
]
country.forEach((a)=> console.log(` the contry names are : ${a.name}`));
country.forEach((a)=> console.log(` the contry captitals are : ${a.capital}`));
country.forEach((a)=> console.log(` the contry population are : ${a.population}`));
// 2
let co = [
    {country: 'English',count:91},
    {country: 'French',count:45},
    {country: 'Arabic',count:25},
    {country: 'Spanish',count:24},
    {country:'Russian',count:9},
    {country:'Portuguese', count:9},
    {country:'Dutch',count:8},
    {country:'German',count:7},
    {country:'Chinese',count:5},
    {country:'Swahili',count:4}
    ]
function mostSpokenLanguages() {
   let fi = co.filter((hi)=>hi.count > 90);
   return fi;
  }
  console.log(mostSpokenLanguages())
// 3
let go = [
    {country: 'China', population: 1377422166},
    {country: 'India', population: 1295210000},
    {country: 'United States of America', population: 323947000},
    {country: 'Indonesia', population: 258705000},
    {country: 'Brazil', population: 206135893},
    {country: 'Pakistan', population: 194125062},
    {country: 'Nigeria', population: 186988000},
    {country: 'Bangladesh', population: 161006790},
    {country: 'Russian Federation', population: 146599183},
    {country: 'Japan', population: 126960000}
    ]
function hi(){
    let fis = go.filter((his)=>his.population > 1000000000);
    return fis
}
console.log(hi());
// 4
function sum(num1){
    return num1+num1;
    }
function min(num1,num2){
    return Math.min(num1,num2);
    }
function max(num1,num2){
    return Math.max(num1,num2);
    }
function range(num1,num2){
    return Math.max(num1)-Math.min(num2);
    }
function mean(num1,num2){
    return num1+num1/num2;
    }
function meadian(num1, num2){
  let nu = num1 - num2;
    return Math.floor(nu/2);
    }
function  Variance(num1){
    return Math.pow(num1-num1);
    }
function  StandardDeviation(num1){
  return Math.sqrt(num1);
    }
    // function sum 
console.log(`the sum number is : ${sum(5)}`);
// function min
console.log(`the minimum number is : ${min(5,7)}`);
// function max
console.log(`the maximum number is : ${max(5,7)}`);
// function range
console.log(`the range number is : ${range(5,7)}`);
// function mean
console.log(`the mean number is : ${mean(20,7)}`);
// function meadian
console.log(`the meadian number is : ${meadian(3,5)}`);
// function meadian
console.log(`the  Variane number is : ${ Variance(5)}`);
// function 
console.log(`the  StandardDeviation number is : ${ StandardDeviation(10,5)}`);

// END OF EXERCISE THREE ;
