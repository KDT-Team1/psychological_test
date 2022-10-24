const result = document.querySelector('.result');

if(localStorage.getItem('result_disney')){
    let result_disney = document.createElement('div');
    result_disney.innerHTML='<a class="nav-link" href="/mypage">디즈니</a>'
    result.appendChild(result_disney);
}
if(localStorage.getItem('result_simpson')){
    let result_simpson = document.createElement('div');
    result_simpson.innerHTML='<a class="nav-link" href="/mypage">심슨</a>'
    result.appendChild(result_simpson);
}
if(localStorage.getItem('result_halloween')){
    let result_halloween = document.createElement('div');
    result_halloween.innerHTML='<a class="nav-link" href="/mypage">할로윈</a>'
    result.appendChild(result_halloween);
    console.log(result_halloween);
}

console.log('디즈니');
console.log(localStorage.getItem('result_disney'));
console.log('심슨');
console.log(localStorage.getItem('result_simpson'));
console.log('할로윈');
console.log(localStorage.getItem('result_halloween'));