if(localStorage.getItem('result')){
    var result = localStorage.getItem('result')
   }

console.log(result);

// document.querySelector('.getresult').innerHTML = `${result}`;

if (result > 8 && result < 12) {
    document.querySelector('.profile').innerHTML = '<img class ="col-12 col-lg-4" src="/static/img/testResult_Halloween/1.png" alt="01">';
    document.querySelector('.name').innerHTML = '확신의 관종 할리퀸 룩';
    document.querySelector('.first').innerHTML = '남들보다 잘나지 않으면 견딜수 없다. 어디서든 내가 제일 잘나가야하고, 내가 제일 튀어야해!';
    document.querySelector('.second').innerHTML = '남들과 똑같은 것은 견딜 수 없다. 타고난 관종인데, 능력으로 튀는게 좋아~';
    document.querySelector('.third').innerHTML = '자기애가 높다. 솔직히 잘났는데 어쩌겠어~';
    document.querySelector('.fourth').innerHTML = '인류의 미래.. 뭐 이런거에 관심이 많다. 욕심이 많고 이상주의자에.. 자기 능력을 너무 잘 알고 있다.';
    document.querySelector('.fifth').innerHTML = '인생은 노빠꾸. 한 번 정했으면 그 길로 가야해! 안되면? 되게한다!';
    document.querySelector('.good').innerHTML = '같이 놀면 재밌는 애<img class="col-12" src="/static/img/testResult_Halloween/2.png" alt="02">슈퍼마리오 룩';
    document.querySelector('.bad').innerHTML = '같이 놀면 재미 없는 애<img class="col-12" src="/static/img/testResult_Halloween/3.png" alt="03">스폰지밥 룩';
}

if (result > -12 && result < -6) {
    document.querySelector('.profile').innerHTML = '<img class ="col-12 col-lg-4" src="/static/img/testResult_Halloween/2.png" alt="02">';
    document.querySelector('.name').innerHTML = '생존마스터 슈퍼마리오 룩';
    document.querySelector('.first').innerHTML = '지구 어디에 떨어뜨려도 생존할 수 있는 강인한 생존력의 소유자! 어딜가서 굶어 죽을 일은 없다.';
    document.querySelector('.second').innerHTML = '사람들이 여럿 모이면 자연스레 리더가 되는 편이다.';
    document.querySelector('.third').innerHTML = '할 말이 있으면 하는 화끈한 성격';
    document.querySelector('.fourth').innerHTML = '가끔 사람들에게 어려운 부탁을 받아도 거절을 잘 못한다.';
    document.querySelector('.fifth').innerHTML = '전형적인 사업가 마인드. 파티에서 놀면서도 &#39;이런 사업 괜찮겠는데?&#39; 생각 중! 솔직히 나중에 돈 마를 일은 없을 것 같다.';
    document.querySelector('.good').innerHTML = '같이 놀면 재밌는 애<img class="col-12" src="/static/img/testResult_Halloween/4.png" alt="04">해리포터 룩';
    document.querySelector('.bad').innerHTML = '같이 놀면 재미 없는 애<img class="col-12" src="/static/img/testResult_Halloween/3.png" alt="03">스폰지밥 룩';
}

if (result > -7 && result < 0) {
    document.querySelector('.profile').innerHTML = '<img class ="col-12 col-lg-4" src="/static/img/testResult_Halloween/3.png" alt="03">';
    document.querySelector('.name').innerHTML = '동심의 스폰지밥 룩';
    document.querySelector('.first').innerHTML = '동심과 사랑이 가득 느껴지는 폭신폭신한 코스튬!';
    document.querySelector('.second').innerHTML = '사람들과 어울리는 걸 너~~무 좋아하는 당신. 할로윈 한참 전부터 고민하고, 그렇게 고심해서 정한 코스튬을 친구들과 하나씩 나눠입고 왔다.';
    document.querySelector('.third').innerHTML = '엄청난 친화력의 소유자. 처음 보는 사람들과도 거리낌없이 인사를 나누고, 기념사진을 찍을 수 있다.';
    document.querySelector('.fourth').innerHTML = '여기저기 관심도 많고, 센스도 타고난 당신. 통통 튀는 매력을 가진 사람이다. 그래서 늘 주변에 사람이 많은 인기인!';
    document.querySelector('.fifth').innerHTML = '오뚝이 같은 사람. 기분 나쁜 일이 있어도, 슬픈 일이 있어도 금세 특유의 긍정에너지로 이겨내고 행복해진다.';
    document.querySelector('.good').innerHTML = '같이 놀면 재밌는 애<img class="col-12" src="/static/img/testResult_Halloween/5.png" alt="05">좀비 룩';
    document.querySelector('.bad').innerHTML = '같이 놀면 재미 없는 애<img class="col-12" src="/static/img/testResult_Halloween/1.png" alt="01">할리퀸 룩';
}

if (result > 0 && result < 5) {
    document.querySelector('.profile').innerHTML = '<img class ="col-12 col-lg-4" src="/static/img/testResult_Halloween/4.png" alt="04">';
    document.querySelector('.name').innerHTML = 'Nerdy 매력 해리포터 룩';
    document.querySelector('.first').innerHTML = '한번 꽂히면 빠져 나올 수가 없다는 &#39;너드&#39;의 매력을 머리부터 발끝까지 뽐낸다.';
    document.querySelector('.second').innerHTML = '사실 근데... 원래 평소에 입던 옷이라며... 후드티에 츄리닝 바지... 안경까지...';
    document.querySelector('.third').innerHTML = '한가지 분야에 꽂히면 약간 &#39;돌아버리는&#39; 타입. 위키피디아 문서 처음부터 끝까지 읽는 건 기본이고, 구글 검색 1페이지부터 끝까지 볼 때도 있다. 관심사가 조금 마이너해서 주변에는 말할 수가 없는 그런 아쉬움이 있다는 거…';
    document.querySelector('.fourth').innerHTML = '말보단 생각이 편하다. 머릿 속에 있는 생각들을 말로 꺼내는 건 왜 이렇게 힘들까? 정리되지 않은 생각들을 다 뱉어내다가 박찬호가 되기도 한다. 대부분의 경우엔... 아무 말도 안하고 혼자 머릿 속에서 할 말 생각하다 마는 편.';
    document.querySelector('.fifth').innerHTML = '자신의 유니크한 성격을 좋아한다. 인싸? 그런 건 되고싶지 않아. 앞으로도 이렇게 내가 좋아하는 거 덕질하면서 살고 싶다.';
    document.querySelector('.good').innerHTML = '같이 놀면 재밌는 애<img class="col-12" src="/static/img/testResult_Halloween/2.png" alt="02">슈퍼마리오 룩';
    document.querySelector('.bad').innerHTML = '같이 놀면 재미 없는 애<img class="col-12" src="/static/img/testResult_Halloween/5.png" alt="05">좀비 룩';
}

if (result > 4 && result < 9) {
    document.querySelector('.profile').innerHTML = '<img class ="col-12 col-lg-4" src="/static/img/testResult_Halloween/5.png" alt="05">';
    document.querySelector('.name').innerHTML = '나는 자연인이다 좀비 룩';
    document.querySelector('.first').innerHTML = '당신의 인생을 영화로 만든다면, 아마 그 영화의 제목은 &#39;관종의 일생&#39;일 것.. 본인은 스스로를 샤이관종이라고 생각할지도 모르지만, 당신은 진성관종이다.';
    document.querySelector('.second').innerHTML = '관심을 받기 위해선 노출도 감수하는 당신은 할로윈 파티의 진정한 자연인. 유교걸, 유교보이들의 나라에서 태어난 것이 아쉬울 정도에요.';
    document.querySelector('.third').innerHTML = '&#39;오늘 내가 이 구역 접수하러 왔다&#39;는 마음으로 할로윈 파티에 입성! 개쩌는 사교력으로 다음 날 눈뜨면 핸드폰 사진첩에 모르는 사람들과 찍은 셀카가 가득할지도?';
    document.querySelector('.fourth').innerHTML = '근데 은근 쿠크멘탈... 가끔 사람들이 나를 우습게 보는 게 아닌가... 내가 싫은가... 이런 고민에 휩싸인다.';
    document.querySelector('.fifth').innerHTML = '그치만 우울함에 절대 깊이 빠져있지 않는다! 금방 이겨내고 다시 아좌좌~';
    document.querySelector('.good').innerHTML = '같이 놀면 재밌는 애<img class="col-12" src="/static/img/testResult_Halloween/3.png" alt="03">스폰지밥 룩';
    document.querySelector('.bad').innerHTML = '같이 놀면 재미 없는 애<img class="col-12" src="/static/img/testResult_Halloween/4.png" alt="04">해리포터 룩';
}
