if(localStorage.getItem('result')){
    var result = localStorage.getItem('result')
   }

console.log(result);

document.querySelector('.getresult').innerHTML=`${result}`;