// 2
let sm = ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"];
console.log(sm.toString())
console.log(sm)
console.log(sm.length)
// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('sugar');
console.log(shoppingCart);
const shoppingCarts = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCarts.pop(4)
shoppingCarts[2] = 'greentea'
console.log(shoppingCarts)
// 4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
if (countries.includes('Ethiopia')){
    console.log(`ETHIOPIA`);
}
else {
    console.log('not exist country')
}
// 5
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  if (webTechs.includes('Sass')){
    console.log(`Sass`);
}
else {
    console.log('not exist webtechs')
}
// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
