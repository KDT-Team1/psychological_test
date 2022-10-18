let testQuestions = ['Q1. 해야할 일이 많을 때?',
    'Q2. 친구의 고민을 들어줄 때?',
    'Q3. 카페에 갔는데 얼굴만 아는 지인이 있을 때?',
    'Q4. 가장 중요한 것은?',
    'Q5. 힘들어 죽겠는데 친한 친구들과 약속이 있을 때?',
    'Q6. 말도 안되는 이유로 비난을 받았을 때?',
    'Q7. 언젠가 드라마같은 일이 내 인생에서 일어날 것이다.',
    'Q8. 아는 사람이 적은 파티에 가야할 때?'
]

let testAnswers = [
    [
        '계획을 세워서 최대한 빨리 처리한다.',
        '미루고 미루다 마감일 하루 전에 처리한다.',
        '주변 사람의 도움을 받는다.'
    ],
    ['해결책을 제시해준다.', '일단 공감해준다.', '비슷한 나의 경험을 들려준다.'],
    ['못본 척 한다.', '눈인사만 한다.', '다가가서 아는 척을 한다.'],
    ['사랑과 우정', '자연과 동물', '돈'],
    [
        '사과하고 약속을 미룬 다음 집에서 쉰다.',
        '얼굴만 비추고 집에 돌아온다.',
        '친구들을 만나서 신나게 놀며 스트레스를 푼다.'
    ],
    ['속으로 삭힌다.', '내 잘못이 아닌걸 차근차근 설명한다.', '화부터 내고 시작한다.'],
    ['글쎄.. 있을 수도 있고.. 없을 수도 있고.. 반반', '놉! 현실과 드라마는 다르다.', '당연!'],
    [
        '아는 사람들이랑만 어울린다.',
        '참석하지 않거나 얼굴만 비추고 집으로 돌아온다.',
        '파티에서 새로운 친구를 사귄다.'
    ]
]

for (let i = 0; i < 8; i++) {
    document.getElementById(`q${i}`).innerHTML = `${testQuestions[i]}`;
    document.getElementById(`answer${i}0`).innerHTML = `${testAnswers[i][0]}`;
    document.getElementById(`answer${i}1`).innerHTML = `${testAnswers[i][1]}`;
    document.getElementById(`answer${i}2`).innerHTML = `${testAnswers[i][2]}`;
}

document.querySelector('.question0').classList.toggle('question-none');

const answer = document.querySelectorAll('.answer');
let result = 0;
let percent = 0; // test progress meter
let page = 1; // page progress meter
progress(percent, page);

for (var i = 0; i < answer.length; i++) {
    answer[i].addEventListener('click', function() {

        result = result + 1 + parseInt(this.id[7]);

        for (let i = 0; i < 8; i++) {
            if (i == 7) {
                document.querySelector('.question' + i).classList.toggle(`question-none`);
                document.querySelector('.result').classList.toggle(`question-none`);
                document.querySelector('.result').innerHTML = `${result}`;
                localStorage.setItem('result', `${result}`);
                // console.log(localStorage.getItem('result'));
                // console.log(result);
                // break;  //마지막문제
            } else if (!($('.question' + i).hasClass('question-none'))) {
                document.querySelector('.question' + i).classList.toggle(`question-none`);
                document.querySelector('.question' + (i + 1)).classList.toggle(`question-none`);
                i = 8;
                percent = percent + 12.5;
                page = page + 1;
                progress(percent, page);
            }
        }
    })
}

// // back 버튼 

// const back = document.getElementById('goBack');
// back.addEventListener('click', function() {
//     for (let i = 0; i < 8; i++) {
//         if (i == 0) {
//             document.querySelector('.question' + i).classList.toggle(`question-none`);
//             document.querySelector('.result').classList.toggle(`question-none`);
//             i = 8;
//         } else if (!($('.question' + i).hasClass('question-none'))) {
//             document.querySelector('.question' + i).classList.toggle(`question-none`);
//             document.querySelector('.question' + (i - 1)).classList.toggle(`question-none`);
//             i = 8;
//         }
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