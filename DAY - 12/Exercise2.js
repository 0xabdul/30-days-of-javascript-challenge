console.log('EXERCISE 2️⃣');
// 1
function tenMostFrequentWords(paragraph) {
    const words = paragraph.toLowerCase().split(/\s+/);
    const wordFrequency = {};
    words.forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });
    const wordFrequencyArray = Object.keys(wordFrequency).map(word => ({ word, count: wordFrequency[word] }));
    const sortedWords = wordFrequencyArray.sort((a, b) => b.count - a.count);
    const top10Words = sortedWords.slice(0, 10).map(entry => entry.word);
    return top10Words;
}
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));

console.log(tenMostFrequentWords())
// END OF EXERCISE ONE 