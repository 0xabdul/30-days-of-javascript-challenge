# 🔖 Day - 12

## Regular Expressions

## Exercises: Level 1 💻


1.Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

2.The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

    points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
    sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
    distance = 12

3.Write a pattern which identify if a string is a valid JavaScript variable

    is_valid_variable('first_name') # True
    is_valid_variable('first-name') # False
    is_valid_variable('1first_name') # False
    is_valid_variable('firstname') # True


## Exercises: Level 2 💻

1.Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

    paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
    console.log(tenMostFrequentWords(paragraph))



## Exercises: Level 2 💻


1.Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

    sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    console.log(cleanText(sentence))

    I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
 ```
2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

```js
 console.log(mostFrequentWords(cleanedText))
 [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]
