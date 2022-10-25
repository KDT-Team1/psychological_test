
if(localStorage.getItem('result_disney')){}else{
    document.querySelector('.disney-test').classList.add('display-none');
}
if(localStorage.getItem('result_simpson')){}else{
    document.querySelector('.simpson-test').classList.add('display-none');
}
if(localStorage.getItem('result_halloween')){}else{
    document.querySelector('.halloween-test').classList.add('display-none');
}
if(localStorage.getItem('result_halloween') || localStorage.getItem('result_simpson') || localStorage.getItem('result_disney')){
}else{
    document.querySelector('.none-test').classList.toggle('display-none');
}

// localStorage.removeItem('result_disney');
// localStorage.removeItem('result_simpson');
// localStorage.removeItem('result_halloween')


function deleteAll(){
    localStorage.removeItem('result_disney');
    localStorage.removeItem('result_simpson');
    localStorage.removeItem('result_halloween');
    location.reload();
}