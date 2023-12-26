console.log('EXERCISE 3️⃣');
// 1
const countries = 
[
    { English: 91 },
    { French: 45 },
    { Arabic: 25 },
    { Spanish: 24 },
    { Russian: 9 },
    { Portuguese: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Chinese: 5 },
    { Swahili: 4 },
    { Serbian: 4 }
  ];
let set = new Set(lang);
console.log(`${set.size}`);
// 2
function mostSpokenLanguages(countries, numLanguages) {
    const languageCounts = {};
    countries.forEach(country => {
      country.languages.forEach(language => {
        languageCounts[language] = (languageCounts[language] || 0) + 1;
      });
    });
    const languageArray = Object.entries(languageCounts).map(([language, count]) => ({ [language]: count }));
    languageArray.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);
    return languageArray.slice(0, numLanguages);
  }console.log(mostSpokenLanguages(countries, 10));

  // END OF EXERCISE THREE