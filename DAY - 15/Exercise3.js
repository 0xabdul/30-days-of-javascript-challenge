console.log('EXERCISE 3️⃣');
// 1
class js{
constructor(sum){
    this.sum=sum;
}
len(){
    return this.sum.length;
}
max(){
    return Math.max(...this.sum);
}
min(){
    return Math.min(...this.sum);
}
percentile(percentile) {
    const sortedData = this.data.sort((a, b) => a - b);
    const index = Math.ceil((percentile / 100) * sortedData.length) - 1;
    return sortedData[index];
  }
frequencyDistribution() {
    const frequencyMap = new Map();
    this.data.forEach((value) => {
      frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
    });
    return frequencyMap;
  }
mean(){
let su = this.sum.reduce((a,b)=> a+b,0);
return su / this.sum.length;
}
range(){
return Math.max(...this.sum)-Math.min(...this.sum)
}
variance() {
    const meanValue = this.mean();
    const squaredDifferences = this.data.map((value) => Math.pow(value - meanValue, 2));
    return squaredDifferences.reduce((acc, value) => acc + value, 0) / this.data.length;
  }
  standardDeviation(){
   return Math.sqrt(this.variance())
  }
  median() {
    const sortedData = this.data.sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  }
}

let findlen = [1,2,3,4,5,6,7,8,9,0];
let find = new js(findlen);
console.log(` the count answer is : ${find.len()}`);
console.log(` the max answer is : ${find.max()}`);
console.log(` the min answer is : ${find.min()}`);
console.log(` the percentile answer is : ${find.percentile(50)}`);
console.log(` the frequencyDistribution answer is : ${find.frequencyDistribution()}`);
console.log(` the mean answer is : ${find.mean()}`);
console.log(` the range answer is : ${find.range()}`);
console.log(` the variance answer is : ${find.variance()}`);
console.log(` the  standardDeviation answer is : ${find. standardDeviation()}`);
console.log(` the median answer is : ${find.median()}`);

// 2
class PersonAccount{
constructor(firstname, lastname, incomes, expenses,totalIncome, totalExpense, accountInfo,addIncome, Expense,accountBalance ){
    this.firstname=firstname;
    this.lastname=lastname;
    this.incomes =incomes;
    this.expenses=expenses;
    this.totalIncome=totalIncome;
    this.totalExpense=totalExpense;
    this.accountInfo=accountInfo;
    this.addIncome=addIncome;
    this.Expense=Expense;
    this.accountBalance=accountBalance;
}
getperson(){
    return `firstname: ${this.firstname},lastname: ${this.lastname},incomes: ${this.incomes},expenses: ${this.expenses},totalIncome: ${this.totalIncome},totalExpense: ${this.totalExpense},accountInfo: ${this.accountInfo},Income: ${this.addIncome},Expense: ${this.Expense},accountBalance: ${this.accountBalance}`
}
}
let obj = new PersonAccount('muhammad','abdullah',10000,5000,20000,10000,'canarabank',30000,3000,500000);
console.log(obj.getperson());

// END OF EXERCISE THREE
