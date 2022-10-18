const testLines = ['Q1. 해야할 일이 많을 때?',
    '계획을 세워서 최대한 빨리 처리한다.',
    '미루고 미루다 마감일 하루 전에 처리한다.',
    '주변 사람의 도움을 받는다.',
    'Q2. 친구의 고민을 들어줄 때?',
    '해결책을 제시해준다.',
    '일단 공감해준다.',
    '비슷한 나의 경험을 들려준다.',
    'Q3. 카페에 갔는데 얼굴만 아는 지인이 있을 때?',
    '못본 척 한다.',
    '눈인사만 한다.',
    '다가가서 아는 척을 한다.',
    'Q4. 가장 중요한 것은?',
    '사랑과 우정',
    '자연과 동물',
    '돈',
    'Q5. 힘들어 죽겠는데 친한 친구들과 약속이 있을 때?',
    '사과하고 약속을 미룬 다음 집에서 쉰다.',
    '얼굴만 비추고 집에 돌아온다.',
    '친구들을 만나서 신나게 놀며 스트레스를 푼다.',
    'Q6. 말도 안되는 이유로 비난을 받았을 때?',
    '속으로 삭힌다.',
    '내 잘못이 아닌걸 차근차근 설명한다.',
    '화부터 내고 시작한다.',
    'Q7. 언젠가 드라마같은 일이 내 인생에서 일어날 것이다.',
    '글쎄.. 있을 수도 있고.. 없을 수도 있고.. 반반',
    '놉! 현실과 드라마는 다르다.',
    '당연!',
    'Q8. 아는 사람이 적은 파티에 가야할 때?',
    '아는 사람들이랑만 어울린다.',
    '참석하지 않거나 얼굴만 비추고 집으로 돌아온다.',
    '파티에서 새로운 친구를 사귄다.'
];

let testQuestions = [];
let testAnswers = [];

// 양자택일 설문조사에서 지문과 답변 분리해서 각 리스트에 저장해주는 함수
function testWith2A(testLines) {
    let arr = [];
    for (let i = 0; i < testLines.length; i++) {
        if (i % 3 == 0) {
            testQuestions.push(testLines[i]);
        } else {
            arr.push(testLines[i]);
            if (arr.length == 2) {
                testAnswers.push(arr);
                arr = [];
            }
        }
    }
}



// 삼자택일 설문조사에서 지문과 답변 분리해서 각 리스트에 저장해주는 함수
function testWith3A(testLines) {
    let arr = [];
    for (let i = 0; i < testLines.length; i++) {
        if (i % 4 == 0) {
            testQuestions.push(testLines[i]);
        } else {
            arr.push(testLines[i]);
            if (arr.length == 3) {
                testAnswers.push(arr);
                arr = [];
            }
        }
    }
}

testWith3A(testLines);

// 설문조사 결과 판독용 변수
let answerNum = 0;

for (let i = 0; i < testQuestions.length; i++) {
    document.getElementById(`testQ${i}`).innerHTML = testQuestions[i];
    for (let j = 0; j < testAnswers[i].length; j++) {
        document.getElementById(`testA${i}-${j+1}`).innerHTML = testAnswers[i][j];
    }
}

// document.querySelectorAll('.question').style.display = 'none';
// document.getElementById('testElement1').style.display = 'block';

// 설문조사 지문들 하나씩만 보이게 하는 기능
function showQuestion(index) {
    let question = document.querySelectorAll('.question');
    question[index + 1].style.display == 'block';
    question[index].style.display = 'none';
}

document.querySelector('.question0').classList.toggle('question-none');

const answer = document.querySelectorAll('.answer');
console.log(answer[0]);
console.log(answer[1]);


for (var i = 0; i < answer.length; i++) {

    answer[i].addEventListener('click', function() {
        for (let i = 0; i < 8; i++) {
            if (i == 7) {
                break; //마지막문제
            } else if (!($('.question' + i).hasClass('question-none'))) {
                document.querySelector('.question' + i).classList.toggle(`question-none`);
                document.querySelector('.question' + (i + 1)).classList.toggle(`question-none`);
                i = 8;
            }
        }
    })

}

// for (let i = 0; i < testQuestions.length; i++) {
//     let radio = document.getElementsByName(`testQ${i}`);
//     for (let j = 0; j < radio.length; j++) {
//         radio[j].addEventListener('click', function() {
//             answerNum += 1;
//             console.log(answerNum);
//         });
//     }
// }


// --------------------------------------------------