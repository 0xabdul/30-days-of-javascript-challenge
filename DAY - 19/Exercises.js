// <.......LEVEL 1.......  >

console.log('EXERCISE 1️⃣');

// 1 
function outer(){
    let a = 1;
    function inner(){
      for(let i=0;i<a;i++){
      console.log(i)
      return a
      }
    }
    return inner
}
let fun = outer()
console.log(fun())
/* print
0
1
*/



// <.......LEVEL 2.......  >

console.log('EXERCISE 2️⃣');

// 1
function out(){
    let a= 10; // how many times print as you want
    function first(){
        for(let i = 0;i<a;i++){
            console.log(i)
        }
        return a
    }
    function second(){
        a--
        return a
    }
    function third(){
        ++a
        return a
    }
    return{
       first:first(),
       second:second(),
       third:third()
    }
}
let fu = out();
console.log(fu.first) // 1 - 10 print
console.log(fu.second) // 9 print 
console.log(fu.third) // 10 print


// <.......LEVEL 3.......  >

console.log('EXERCISE 3️⃣');

// 1
function personAccount(firstName, lastName){
    let incomes=[];
    let expenses = [];
    function  totalIncome(){
     return incomes.reduce((a,b)=> a+b.amount,0)
    }
    function totalExpense() {
        return expenses.reduce((a,b)=> a+b.amount,0)
    }
    function accountBalance() {
        return totalIncome() - totalExpense();
      }
      function accountInfo() {
        return {
          firstName,
          lastName,
          totalIncome: totalIncome(),
          totalExpense: totalExpense(),
          accountBalance: accountBalance(),
        };
      }
      function addIncome(description, amount) {
        incomes.push({ description, amount });
      }
      function addExpense(description, amount) {
        expenses.push({ description, amount });
      }
      return {
        accountInfo,
        addIncome,
        addExpense,
      };
    }
    const myAccount = personAccount("John", "Doe");
myAccount.addIncome("Salary", 5000);
myAccount.addIncome("Bonus", 1000);
myAccount.addExpense("Rent", 1200);
myAccount.addExpense("Utilities", 200);
const accountInformation = myAccount.accountInfo();
console.log(accountInformation);
