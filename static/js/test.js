// 설문조사 작동을 위한 Js CODE

// 심리테스트 설문 지문을 저장한 txt 파일에서 지문을 읽어와서 string 리스트로 반환하는 함수
// 👇️ if using ES6 Imports uncomment line below
// import {readFileSync, promises as fsPromises} from 'fs';
const { readFileSync, promises: fsPromises } = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);
)
return arr;
}

// --------------------------------------------------------------

// // ✅ read file ASYNCHRONOUSLY
// async function asyncReadFile(filename) {
//     try {
//         const contents = await fsPromises.readFile(filename, 'utf-8');

//         const arr = contents.split(/\r?\n/);

//         console.log(arr);

//         return arr;
//     } catch (err) {
//         console.log(err);
//     }
// }


let testLines = syncReadFile('static/js/files/simpson.txt');
console.log(testLines);


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

console.log(testQuestions);
console.log(testAnswers);

// 설문조사 결과 판독용 변수
let answerNum = 0;


// submit.addEventListener('click',function(i){
//     i=i+1
// })

// <%submit.addEventListener('click',function(i){ %>
//     <%    i=i+1 %>
//     <%}) %>


// let i = 0;

// while(i<text.length){


// <% for(let i=0; i<text.length; i++){ %>
//     <div><%= text[i][0]; %></div><br>
// <%    for(let j=1; j<text[i].length; j++){ %>
//     <input type="radio" name="chk_info" value="answer<%=j; %>"><%=j %>
//     <div><%= text[i][j]; %></div>
// <%    } %>
//     <br><button onclick="submit">확인</button>
// <% } %></br>


// submit.addEventListener('submit',function(){
//     i+=1;
// })