if(localStorage.getItem('result_disney')){
    var result = localStorage.getItem('result_disney')
   }

console.log(result);

if (result > 7 && result < 11) {
    document.querySelector('.profile').innerHTML = '<img class ="col-12 col-lg-4" src="/static/img/testResult_Disney/1.png" alt="01">';
    document.querySelector('.name').innerHTML = '메리다(Merida)';
    document.querySelector('.first').innerHTML = '"I want my freedom." "난 자유를 원해."';
    document.querySelector('.second').innerHTML = '루틴이 있어야 일을 제대로 시작하고 끝낼 수 있다.';
    document.querySelector('.third').innerHTML = '대단한 실행력의 소유자여서 항상 "어떻게 하면 나아질까?"가 관심사!';
    document.querySelector('.fourth').innerHTML = '다른 사람들한테 맡겨서 대충 하는 모습을 보기보다는 직접 제대로 하는게 마음이 편하다.';
    document.querySelector('.fifth').innerHTML = '다른 사람들이 실력을 인정해 줄 때 충족감을 느낀다';
    document.querySelector('.mbti').innerHTML = 'ESTP - 모험을 즐기는 사업가';
    document.querySelector('.good').innerHTML = '잘 맞는 유형<img class="col-12" src="/static/img/testResult_Disney/4.png" alt="04">라푼젤';
    document.querySelector('.bad').innerHTML = '안 맞는 유형<img class="col-12" src="/static/img/testResult_Disney/2.png" alt="02">신데렐라';
}else if(result > -11 && result < -6) {
    document.querySelector('.profile').innerHTML = '<img class ="col-12 col-lg-4" src="/static/img/testResult_Disney/2.png" alt="02">';
    document.querySelector('.name').innerHTML = '신데렐라(Cinderella)';
    document.querySelector('.first').innerHTML = '"Have courage and be kind."<br>"용기를 가지고 항상 친절해야해."';
    document.querySelector('.second').innerHTML = '-혼자 있는 것을 좋아하고, 사람들과 있을 땐 조용하다.';
    document.querySelector('.third').innerHTML = '-성실한 사람이어서 계획한 일을 차근차근 해낸다.';
    document.querySelector('.fourth').innerHTML = '-책임감을 갖고 맡은 일을 해낸다.';
    document.querySelector('.fifth').innerHTML = '-반듯해보이는 첫인상과 달리 친해지면 귀여운 면이 많다.';
    document.querySelector('.mbti').innerHTML = 'ISFJ - 용감한 수호자';
    document.querySelector('.good').innerHTML = '잘 맞는 유형<img class="col-12" src="/static/img/testResult_Disney/3.png" alt="03">인어공주';
    document.querySelector('.bad').innerHTML = '안 맞는 유형<img class="col-12" src="/static/img/testResult_Disney/1.png" alt="01">메리다';
}else if (result > -4 && result < 1) {
    document.querySelector('.profile').innerHTML = '<img class ="col-12 col-lg-4" src="/static/img/testResult_Disney/3.png" alt="03">';
    document.querySelector('.name').innerHTML = '인어공주(Ariel)';
    document.querySelector('.first').innerHTML = '"Who says that my dreams have to stay my dreams?"<br>"내 꿈이 그저 꿈으로 남아야 한다고 누가 그래?"';
    document.querySelector('.second').innerHTML = '-재미없는 삶은 의미 없는 삶이라고 생각한다.';
    document.querySelector('.third').innerHTML = '-고구마스럽게 착해보이지만 알고보면 똑부러지는 성격이다.';
    document.querySelector('.fourth').innerHTML = '-예쁜말 장인. 모든 칭찬을 진심 담뿍 담아서 하는 편이다.';
    document.querySelector('.fifth').innerHTML = '-하루를 꽉꽉 채워 충족되게 살아가는 편. 하루가 차있지 않으면 불안함을 느끼기도 한다.'
    document.querySelector('.mbti').innerHTML = 'ENFP - 재기발랄한 활동가';
    document.querySelector('.good').innerHTML = '잘 맞는 유형<img class="col-12" src="/static/img/testResult_Disney/2.png" alt="02">신데렐라';
    document.querySelector('.bad').innerHTML = '안 맞는 유형<img class="col-12" src="/static/img/testResult_Disney/5.png" alt="05">포카혼타스';
}else if (result > 0 && result < 4) {
    document.querySelector('.profile').innerHTML = '<img class ="col-12 col-lg-4" src="/static/img/testResult_Disney/4.png" alt="04">';
    document.querySelector('.name').innerHTML = '라푼젤(Rapunzel)';
    document.querySelector('.first').innerHTML = '"Do what you like love what you do."<br>"네가 좋아하고 사랑하는 것을 해."';
    document.querySelector('.second').innerHTML = '-처음에는 낮을 가리지만 친해지면 바로 tmi 대방출';
    document.querySelector('.third').innerHTML = '-사소한 것에도 쉽게 감동하는 편이라 친해지기 쉽다.';
    document.querySelector('.fourth').innerHTML = '-자신의 생각과 가치를 탐구하느라 많은 시간을 보낸다.';
    document.querySelector('.fifth').innerHTML = '-남들이 강요하거나 간섭하는 것을 싫어한다.'
    document.querySelector('.mbti').innerHTML = 'ESFJ - 사교적 외교관';
    document.querySelector('.good').innerHTML = '잘 맞는 유형<img class="col-12" src="/static/img/testResult_Disney/1.png" alt="01">메리다';
    document.querySelector('.bad').innerHTML = '안 맞는 유형<img class="col-12" src="/static/img/testResult_Disney/6.png" alt="06">자스민';
}else if (result > 3 && result < 6) {
    document.querySelector('.profile').innerHTML = '<img class ="col-12 col-lg-4" src="/static/img/testResult_Disney/5.png" alt="05">';
    document.querySelector('.name').innerHTML = '포카혼타스(Pocahontas)';
    document.querySelector('.first').innerHTML = 'You must choose your own path."<br>"자신만의 길을 가야해."';
    document.querySelector('.second').innerHTML = '-독특한 세계를 가지고있어 한 가지를 깊게 파고들 뿐 아니라 생각이 이리저리 튀는 편이다.';
    document.querySelector('.third').innerHTML = '-겉으로 보기엔 세상에 무관심해보이지만 막상 대화해보면 논리적으로 자신의 의견을 주장한다.';
    document.querySelector('.fourth').innerHTML = '-내 공간, 내 시간이 중요한 사람. 독립적인 성향이 강해서 혼자만의 장소가 꼭 필요하다.'
    document.querySelector('.fifth').innerHTML = '-나한테 흥미로운 것 빼고는 다 귀찮게 느껴질 때가 많다.';
    document.querySelector('.mbti').innerHTML = 'ISFP - 호기심 많은 예술가';
    document.querySelector('.good').innerHTML = '잘 맞는 유형<img class="col-12" src="/static/img/testResult_Disney/2.png" alt="02">자스민';
    document.querySelector('.bad').innerHTML = '안 맞는 유형<img class="col-12" src="/static/img/testResult_Disney/5.png" alt="05">포카혼타스';
}else {
    document.querySelector('.profile').innerHTML = '<img class ="col-12 col-lg-4" src="/static/img/testResult_Disney/6.png" alt="06">';
    document.querySelector('.name').innerHTML = '자스민(Jasmine)';
    document.querySelector('.first').innerHTML = '"I won&#39;t go speechless."<br>"조용히 있지만은 않을거야."';
    document.querySelector('.second').innerHTML = '적극적이며 도도하고 강단 있는 성격의 소유자.';
    document.querySelector('.third').innerHTML = '-낙천적이며 스스로 삶을 이끌어가는 성향이다.';
    document.querySelector('.fourth').innerHTML = '-가끔 평범한 일상은 지루하다고 느껴서 충동적인 모험을 즐긴다.'
    document.querySelector('.fifth').innerHTML = '-자칫 차가워보일 수 있지만 친해지면 한없이 따뜻하다.';
    document.querySelector('.mbti').innerHTML = 'ESTP - 수완좋은 활동가형';
    document.querySelector('.good').innerHTML = '잘 맞는 유형<img class="col-12" src="/static/img/testResult_Disney/5.png" alt="05">포카혼타스';
    document.querySelector('.bad').innerHTML = '안 맞는 유형<img class="col-12" src="/static/img/testResult_Disney/4.png" alt="04">라푼젤';
} //(result > 5 && result < 9)
