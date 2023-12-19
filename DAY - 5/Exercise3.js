// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort()) // sort array
console.log(` the minimum number of array is :${ages[0]}`) // finding the array minummum number
console.log(` the maxmimum number of array is :${ages[9]}`) // finding the maxmimum number of array
const agess = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(`the middle age is : ${agess.slice(4,5)}`)
let sum = (agess.length/10)
console.log(`the average age is : ${sum}`)
console.log(` the minimum number of array is :${agess[0]}`) 
console.log(` the maxmimum number of array is :${agess[6]}`)
console.log(` the minus number of array is :${agess.length}`)
let com1 = (Math.abs(agess[0]-sum))==(Math.abs(agess[6]-sum));
console.log(com1)
const countr = [
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
  console.log(countr.slice(0,10))
// 2
const countrs = [
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
  console.log(` the middile country is : ${countrs.slice(5,6)}`)
// 3
const countrss = [
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
  if (countrss.slice(0,5)==countrss.slice(5,10)){
    console.log("even")
  }
  else{
    console.log(" not even")
  }