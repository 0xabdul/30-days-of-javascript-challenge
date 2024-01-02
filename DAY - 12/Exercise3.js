console.log('EXERCISE 3️⃣');
// 1
function cleanText(text) {
    const cleanedText = text.replace(/[^\w\s]/g, '').toLowerCase()
    return cleanedText.replace(/\s+/g, ' ').trim();
}
function mostFrequentWords(text, numWords = 3) {
    const words = text.split(' ');
    const wordFrequency = {};
    words.forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });
    const wordFrequencyArray = Object.keys(wordFrequency).map(word => ({ word, count: wordFrequency[word] }));
    const sortedWords = wordFrequencyArray.sort((a, b) => b.count - a.count)
    const topWords = sortedWords.slice(0, numWords);
    return topWords;
}
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
const cleanedText = cleanText(sentence);
console.log(cleanedText);
const topFrequentWords = mostFrequentWords(cleanedText);
console.log(topFrequentWords);
