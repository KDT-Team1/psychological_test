const testQuestions = [
    'Q1. \"야 오늘 저녁 할로윈 파티 잊지 않았지?\" 친구의 문자를 받았다. 심정은?',
    'Q2. 할로윈 파티룩을 준비하는 나의 모습은?',
    'Q3. 어떤 코스튬이 좋을까…',
    'Q4. 그 때 들려오는 노크소리..',
    'Q5. 집 앞 영어유치원 아이들의 trick or treat…',
    'Q6. 어찌저찌 아이들을 보내고 드디어 출발하려는데, 코스튬은 어떡하지?',
    'Q7. 약속 장소인 이태원에 도착한 나의 표정은?',
    'Q8. 저 멀리서 친구가 걸어오는데 옆에 모르는 애가 있다. 상대와 친해지는 방법은?',
    'Q9. 새로운 친구가 정말 재미없는 귀신 이야기를 한다',
    'Q10. 밤이 깊어지고 할로윈 파티도 무르익는다. 나는?',
    'Q11. 오늘의 best 코스튬을 선정한다고 한다. 나는?',
];

const testAnswers = [
    ['피곤하게 무슨 파티야.. 차라리 내 목을 쳐라..', '오우 신난다.. 이게 인생이지'],
    ['이럴 때 아니면 언제 또 노니? Flex 파티룩', '지갑 사정을 고려한 가성비 파티룩'],
    ['평소 내 마음속 깊이 간직해둔 인생작 캐릭터', '구글에 \'할로윈 코스튬\'  검색해서 세번째 페이지쯤에 나오는 캐릭터'],
    ['설마 이거 trick or treat…?', '나 뭐 배달시켰나?'],
    ['나는 어른이니까 장단을 맞춰줘야지.. (미소 장착)', '재밌겠다.. 나도 영어유치원 다닐래~~'],
    ['입고가는건 좀^^;; 도착해서 갈아입어야지', '어차피 입고돌아다닐거 입고 지하철 탑승'],
    ['엥 내가 제일 튈줄알았는데..!!', '나 너무 튀는거 아닐까.. 아무도 나를 모르고 놀 수 있음 좋겠어..'],
    ['폭풍 질문형(사실 물어놓고 안듣는 경우도 많음)', '폭풍 리액션형(오디오의 공백 못참음)'],
    ['표정관리가 안됨.. 재미없다', '상대가 민망하지 않게 최선의 리액션을 해준다.'],
    ['너무 재밌어!! 이 밤이 끝나지 않았으면..', '사람 진짜 많네.. 기빨린다..'],
    ['여러분~ 저를 뽑아주세요~ 저 좀 보세요~', '혹시 나…? (두근두근)'],
];


for (let i = 0; i < 11; i++) {
    document.getElementById(`q${i}`).innerHTML = `${testQuestions[i]}`;
    document.getElementById(`answer${i}0`).innerHTML = `${testAnswers[i][0]}`;
    document.getElementById(`answer${i}1`).innerHTML = `${testAnswers[i][1]}`;
}

document.querySelector('.question0').classList.toggle('question-none');

const answer = document.querySelectorAll('.answers');

let result = 0;
let percent = 0; // test progress meter
let page = 1; // page progress meter
progress(percent, page);


for (var i = 0; i < answer.length; i++) {
    answer[i].addEventListener('click', function() {
        if (this.id[7] == 0) {
            result -= 1;
        } else {
            result += 1;
        }

        for (let j = 0; j < 11; j++) {
            if (j == 10) {
                document.querySelector('.question' + j).classList.toggle(`question-none`);
                localStorage.setItem('result', `${result}`);
                // loading page for 1 second
                progress(100, page);
                document.querySelector('.loading').classList.toggle('dot-wave-none');
                setTimeout(function() {
                    location.href = '/result_halloween';
                }, 1000); // 1초 후에 result_disney로 이동
            } else if (!($('.question' + j).hasClass('question-none'))) {
                document.querySelector('.question' + j).classList.toggle(`question-none`);
                document.querySelector('.question' + (j + 1)).classList.toggle(`question-none`);
                j = 11;
                // progress bar 연동 변수들
                percent = percent + 9;
                page = page + 1;
                progress(percent, page);
            }
        }
    })
}

// back 버튼 

// const back = document.getElementById('goBack');
// back.addEventListener('click', function() {
//     if (page == 1) {

//     }
// });

// progress bar 진행하게 만들기

function progress(percent, page) {
    if (percent == 0) {
        document.querySelector('.progress-bar').style.width = `${percent+4}%`;
    } else {
        document.querySelector('.progress-bar').style.width = `${percent}%`;
    }
    document.querySelector('.progress-bar').ariaValueNow = `${percent}`;
    document.querySelector('.progress-bar').innerHTML = `${percent}%`;
    document.querySelector('.page').innerHTML = `${page}/${testQuestions.length}`;
}