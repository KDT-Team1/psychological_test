if (localStorage.getItem('result_simpson')) {
    var result = localStorage.getItem('result_simpson')
}

console.log(result);


if (result > 23) {
    document.querySelector('.profile').innerHTML = '<img class ="col-12 col-lg-4" src="/static/img/testResult_Simpsons/1.png" alt="01">';
    document.querySelector('.name').innerHTML = '호머 심슨<br>(Homer Simpson)';
    document.querySelector('.first').innerHTML = '타인의 말이나 행동에 휩쓸리지 않고 자기 스타일대로 인생을 살아가는 호머 심슨!';
    document.querySelector('.second').innerHTML = '-신념이 굳고 주관이 뚜렷한 성격이지만, 가끔 자기 중심적이고 겸허함이 없다고 평가될 수 있다.';
    document.querySelector('.third').innerHTML = '-외향적이고 사교적인 성격으로 주변에 사람이 항상 많다.';
    document.querySelector('.fourth').innerHTML = '-자기가 내키는 것이나 옳다고 믿는 걸 중시할 뿐, 무례하거나 이치에 안 맞는 얘기를 하는 건 아니다.';
    document.querySelector('.fifth').innerHTML = '-주위에서 골 때리는 상황이 일어나도 웃는 등 능청스레 여유를 부리거나, 별 관심없다는 듯 무표정을 유지하는 등 휘둘리지 않는 성격이어서 주변에서 기가 세다는 말을 종종 듣는다.';
    document.querySelector('.mbti').innerHTML = 'ESFP - 연예인';
    document.querySelector('.good').innerHTML = '잘 맞는 유형<img class="col-12" src="/static/img/testResult_Simpsons/2.png" alt="02">마지 심슨';
    document.querySelector('.bad').innerHTML = '안 맞는 유형<img class="col-12" src="/static/img/testResult_Simpsons/3.png" alt="02">바트 심슨';
} else if (result > 8 && result < 16) {
    document.querySelector('.profile').innerHTML = '<img class ="col-12 col-lg-4" src="/static/img/testResult_Simpsons/2.png" alt="02">';
    document.querySelector('.name').innerHTML = '마지 심슨<br>(Marge Simpson)';
    document.querySelector('.first').innerHTML = '배려심이 많고 이타적이며 모든 사람들과 원만한 관계를 가진 마지 심슨!';
    document.querySelector('.second').innerHTML = '-희생정신이 강하고 내 사람들을 돌보며 그에 기쁨과 보람을 느끼는 긍정적인 성격이다.';
    document.querySelector('.third').innerHTML = '-체계적이고 계획적이어서 주변 환경이 정돈이 잘 되어있으며, 그런 성격 덕에 생산적이고 효과적으로 문제를 해결한다.';
    document.querySelector('.fourth').innerHTML = '-가끔 사람들에게 어려운 부탁을 받아도 거절을 잘 못한다.';
    document.querySelector('.fifth').innerHTML = '-이례적으로 한 번씩 자신이 좋아하는 것에 빠지면 좀처럼 그만두지 못하는 인간적인 면도 있다.';
    document.querySelector('.mbti').innerHTML = 'ISFJ - 수호자';
    document.querySelector('.good').innerHTML = '잘 맞는 유형<img class="col-12" src="/static/img/testResult_Simpsons/1.png" alt="01">호머 심슨';
    document.querySelector('.bad').innerHTML = '안 맞는 유형<img class="col-12" src="/static/img/testResult_Simpsons/5.png" alt="05">크러스티 더 클라운';
}else if (result > 15 && result < 24) {
    document.querySelector('.profile').innerHTML = '<img class ="col-12 col-lg-4" src="/static/img/testResult_Simpsons/3.png" alt="03">';
    document.querySelector('.name').innerHTML = '바트 심슨<br>(Bart Simpson)';
    document.querySelector('.first').innerHTML = '현실적인 목표와 계획으로 인생을 살아가는 바트 심슨!';
    document.querySelector('.second').innerHTML = '-매우 현실적인 성격으로 특히 어려움이나 위기를 겪는 동안 적절한 역할을 한다.';
    document.querySelector('.third').innerHTML = '-할 줄 아는 재주가 많고, 사교적인 성격으로 남들과 항상 친밀한 관계를 유지한다.';
    document.querySelector('.fourth').innerHTML = '-목표를 의심하고, 추측하고, 망설이는 일이 없으며, 결과에 도달하기 위해서 위험을 무릅쓰고 실수도 주저하지 않는다.';
    document.querySelector('.fifth').innerHTML = '-목표에 도달하는 다른 방법이 항상 있다고 믿으며, 그래서 실패의 가능성을 직면할 때 물러서지 않는 굳건한 성격이다.';
    document.querySelector('.mbti').innerHTML = 'ESTP - 사업가';
    document.querySelector('.good').innerHTML = '잘 맞는 유형<img class="col-12" src="/static/img/testResult_Simpsons/2.png" alt="02">마지 심슨';
    document.querySelector('.bad').innerHTML = '안 맞는 유형<img class="col-12" src="/static/img/testResult_Simpsons/1.png" alt="01">호머 심슨';
}else{
    document.querySelector('.profile').innerHTML = '<img class ="col-12 col-lg-4" src="/static/img/testResult_Simpsons/4.png" alt="04">';
    document.querySelector('.name').innerHTML = '리사 심슨<br>(Lisa Simpson)';
    document.querySelector('.first').innerHTML = '합리적인 사고체계의 소유자 리사 심슨!';
    document.querySelector('.second').innerHTML = '-매우 어른스럽고 도덕적 신념도 강한데다 늘 합리적이고 이성적으로 생각하는 편이다';
    document.querySelector('.third').innerHTML = '-내향적인 성격으로 소수의 친한 사람들과만 교류하는 경향이 있다.';
    document.querySelector('.fourth').innerHTML = '-신념을 거스르는 일은 절대 참지 못해서 주변 사람들에게 예민하다는 말을 종종 듣는다.';
    document.querySelector('.fifth').innerHTML = '-하지만 세상은 예민한 사람들로 인해 변하는 것이므로 우리 사회에 중요한 사람이라고 할 수 있다.';
    document.querySelector('.mbti').innerHTML = 'INFJ - 옹호자';
    document.querySelector('.good').innerHTML = '잘 맞는 유형<img class="col-12" src="/static/img/testResult_Simpsons/2.png" alt="02">마지 심슨';
    document.querySelector('.bad').innerHTML = '안 맞는 유형<img class="col-12" src="/static/img/testResult_Simpsons/3.png" alt="03">바트 심슨';
}   //(result < 9)

// browser back button event handler
window.addEventListener('popstate', function(e) {
    history.go(-2);
});

history.pushState(null, null, '');

window.onpopstate = function(event) { //뒤로가기 이벤트를 캐치합니다.

    history.back(); // pushState로 인하여 페이지가 하나 더 생성되기 떄문에 한번에 뒤로가기 위해서 뒤로가기를 한번 더 해줍니다.
    history.go(-2);

};