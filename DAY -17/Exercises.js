// <.......LEVEL 1.......  >

console.log('EXERCISE 1️⃣');

// 1 
localStorage.setItem('firstname','muhammad')
localStorage.setItem('lastname','abdullah')
localStorage.setItem('age',20)
localStorage.setItem('country','india')
localStorage.setItem('city','mumbai');
console.log(localStorage)
localStorage.clear();

// <.......LEVEL 2.......  >

console.log('EXERCISE 2️⃣');

// 1
const student = {
    firstname:'muhammad',
    lastname:'abdullah',
    age:20,
    skills:[
        'html',
        'css',
        'js',
    ],
    country:'india',
}
let str  = JSON.stringify(student,undefined,4);
localStorage.setItem('object',str);
console.log(localStorage)
localStorage.clear();



// <.......LEVEL 3.......  >

console.log('EXERCISE 3️⃣');

// 1
const personAccount = {
    firstname: '',
    lastname: '',
    incomes: new Map(),
    expenses: new Map(),
    get totalIncome() {
      let total = 0;
      for (let [amount] of this.incomes.values()) {
        total += amount;
      }
      return total;
    },
    get totalExpense() {
      let total = 0;
      for (let [amount] of this.expenses.values()) {
        total += amount;
      }
      return total;
    },
    get accountInfo() {
      return `Name: ${this.firstname} ${this.lastname}\nTotal Income: ${this.totalIncome}\nTotal Expense: ${this.totalExpense}`;
    },
    addIncome(description, amount) {
      this.incomes.set(description, amount);
    },
    addExpense(description, amount) {
      this.expenses.set(description, amount);
    },
    get accountBalance() {
      return this.totalIncome - this.totalExpense;
    },
  };
  personAccount.firstname = 'John';
  personAccount.lastname = 'Doe';
  personAccount.addIncome('Salary', 5000);
  personAccount.addIncome('Freelance', 1000);
  personAccount.addExpense('Rent', 1500);
  personAccount.addExpense('Utilities', 200);
  console.log(personAccount.accountInfo);
  console.log(`Account Balance: ${personAccount.accountBalance}`);


  // THAT'S ALL