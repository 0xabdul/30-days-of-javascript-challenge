console.log('EXERCISE 3️⃣');

// 1
// firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance
const personAccount = [
{
 firstName : 'muhammad',
 lastName : 'abdullah',
 incomes  : 10000,
 expensesproperties : 500,
 accountblance :50000,
},
{
    firstName : 'umar',
    lastName : 'anhu',
    incomes  : 20000,
    expensesproperties : 300,
    accountblance :70000,
   },
   {
    firstName : 'abu',
    lastName : 'ubaitha',
    incomes  : 1000,
    expensesproperties : 100,
    accountblance :20000,
   },
   {
    firstName : 'stve',
    lastName : 'jobs',
    incomes  : 4000,
    expensesproperties : 800,
    accountblance :30000,
   },
]
function fun(add){
let sum = (add.incomes);
return ` THE TOTAL INCOMS IS :${sum}`;
}
function funs(add){
    let sums = (add.expensesproperties);
    return ` THE TOTAL EXPENSES IS :${sums}`;
    }
    function funss(add){
        let sumss = (add.accountblance);
        return ` THE TOTAL ACCOUNTBLANCE IS :${sumss}`;
        }
// check your information by puting input i mean index value ex.. [0],[1]
console.log(fun(personAccount[0]));
console.log(funs(personAccount[0]));
console.log(funss(personAccount[0]));

// 3
const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ];
  
function rateProduct(productId, userId, rating) {
    const product = products.find((p) => p._id === productId);
    product.ratings.push({ userId, rate: rating });
    console.log(`User ${userId} has rated ${product.name} with ${rating} stars.`);
  }
  function averageRating(productId) {
    const product = products.find((p) => p._id === productId);
    const totalRating = product.ratings.reduce((sum, rating) => sum + rating.rate, 0);
    const average = totalRating / product.ratings.length;
    console.log(`Average rating for ${product.name}: ${average.toFixed(2)} stars.`);
    return average;
  }
  rateProduct('eedfcf', 'xyz123', 4);
  averageRating('eedfcf');

// 4
function likeProduct(productId, userId) {
    const product = products.find((p) => p._id === productId);
    const userLikedIndex = product.likes.indexOf(userId);
    if (userLikedIndex === -1) {
      product.likes.push(userId);
      console.log(`User ${userId} has liked ${product.name}.`);
    } else {
      product.likes.splice(userLikedIndex, 1);
      console.log(`User ${userId} has unliked ${product.name}.`);
    }
  }
  likeProduct('aegfal', 'xyz123'); 
  likeProduct('aegfal', 'xyz123');
  
  // END OF EXERCISE THREE ;
