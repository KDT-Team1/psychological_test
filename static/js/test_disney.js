const testQuestions=[
'Q1. 디즈니 캐릭터가 된 나는',
'Q2. 디즈니 캐릭터가 됐는데 뭘하지?',
'Q3. 디즈니 캐릭터 세상에 있자니',
'Q4. 오늘 모험의 루트는?',
'Q5. 모험을 하다가 민가에 쌓아놓은 물건들을 쏟아버렸다',
'Q6. 옆동네 공주들과 시비가 붙었다',
'Q7. 갑자기 비가 내리기 시작했다',
'Q8. 너무 돌아다녔나.. 배가 고프다',
'Q9. 어느날 눈을 떠보니 디즈니 캐릭터 중 하나로 변하게 되었다!!',
'Q10. 이제 현실세계로 돌아갈 시간'
];
const testAnswers=[
['대장을 따르는 친구 캐릭터','대장 캐릭터'],
['대충 주변 상황 파악하고 뒹굴뒹굴~','나만의 왕국을 건설하러 떠난다!'],
['피곤하다..   그림같은 경치에서 휴식','멋진게 너무 많다!!  여기저기 돌아다닌다'],
['만나고 싶었던 다른 캐릭터를 만나고 같이 모험을 떠나야지!','아무데나 발길 닿는 대로~'],
['죄송합니다ᅲᅲ 조심조심 다시 쌓아놓는다','사고쳤지만 모르는 척 자리를 뜬다'],
['싸우지 마 말리다가 도망간다','너 지금 뭐라고했냐? 싸운다'],
['나무 밑에서 내리는 비소리를 들으며 감성에 젖는다','공짜 샤워다!!    다른 캐릭터들과 다같이 논다'],
['내가 먹고싶은 메뉴를 파는 식당을 찾으러 간다','사냥을 시작한다'],
['좀 쉬자!  냅다 눕는다','그래도 어떻게 땅바닥에 누워,,   묵을 곳을 찾아본다'],
['공주도 힘드네..    원래 내 인생으로 돌려보내줘~!','괜찮다면 이대로 살고싶다'],
];


for (let i = 0; i < 10; i++) {
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
        if(this.id[7]==0){
            result-=1;
        }else{
            result+=1;
        }
        console.log(result);

        for (let j = 0; j < 10; j++) {
            if (j == 9) {
                document.querySelector('.question' + j).classList.toggle(`question-none`);
                localStorage.setItem('result', `${result}`);
                // console.log(result);
                location.href = '/result_disney';
            } else if (!($('.question' + j).hasClass('question-none'))) {
                document.querySelector('.question' + j).classList.toggle(`question-none`);
                document.querySelector('.question' + (j + 1)).classList.toggle(`question-none`);
                j = 10;
                // progress bar 연동 변수들
                percent = percent + 10;
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