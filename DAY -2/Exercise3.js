console.log(' this is a Exercise 3 >>');
const st = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(st.match('love'));
console.log(st.slice(0,4,));
console.log(st.slice(54,60));
console.log(st.slice(96));
console.log('in this sentance "love" has three');
const sentance = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentance.match('because'));
console.log(sentance.slice(31,55));
console.log('in this sentance "because" has three');
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace('w\^\s'));
let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(income.slice(8,18));
console.log(income.slice(40,52));
console.log(income.slice(65,78));
console.log('the total income of person : ' +' ', 5000*12+10000+15000*12);
// end of level of 3 