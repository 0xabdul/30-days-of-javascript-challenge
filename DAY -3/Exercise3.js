console.log('exercise three')
let defaluts = new Date();
console.log(defaluts.getFullYear()+'/'+dit(defaluts.getMonth())+'/'+dit(defaluts.getDate())+'/'+defaluts.getHours()+':'+defaluts.getMinutes()+':'+defaluts.getSeconds())
function dit(sing){
    return sing<10 ?`0${sing}`:sing;
}