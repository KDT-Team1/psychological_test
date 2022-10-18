// 👇️ if using ES6 Imports uncomment line below
// import {readFileSync, promises as fsPromises} from 'fs';
var fs = require('fs');
const { readFileSync, promises: fsPromises } = require('fs');


// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    return arr;
}

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

// 설문조사 결과 판독용 변수
let answerNum = 0;

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// const dom = new JSDOM(`views/pages/pTest.ejs`);
// // dom.window.document.getElementById("testQ1").innerText = testQuestions[0];
// console.log(dom.window.document.getElementById("testQ1").innerText);

// for (let i = 0; i < testQuestions.length; i++) {
//     document.getElementById(`testQ${i}`).innerHTML = testQuestions[i];
//     for (let j = 0; j < testAnswers[i].length; j++) {
//         document.getElementById(`testA${i}-${j}`).innerHTML = testAnswers[i][j];
//     }
// }

// for (let i = 0; i < testAnswers.length; i++) {
//     document.getElementById(`testQ${i}`).innerHTML = testQuestions[i];
// } 

// document.getElementById("testQ1").innerText = testQuestions[0];
// document.getElementById("testQ2").innerText = testQuestions[1];
// document.getElementById("testQ3").innerText = testQuestions[2];
// document.getElementById("testQ4").innerText = testQuestions[3];
// document.getElementById("testQ5").innerText = testQuestions[4];
// document.getElementById("testQ6").innerText = testQuestions[5];
// document.getElementById("testQ7").innerText = testQuestions[6];
// document.getElementById("testQ8").innerText = testQuestions[7];

// console.log(document.getElementById("testQ1").innerText);

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

// <% for( let i = 0; i < 8; i++ ) { %>
//     <div class="question">
//         <!-- <h2 id="testQ<%= i + 1 %>"></h2> -->
//         <div class="answers">
//             <div class="answer" id="answer<%= i %>-1" onclick="answerSelected(this)">
//                 <p id="testA<%= i %>-1"></p>
//             </div>
//             <hr>
//             <div class="answer" id="answer<%= i %>-2" onclick="answerSelected(this)">
//                 <p id="testA<%= i %>-2"></p>
//             </div>
//             <hr>
//             <div class="answer" id="answer<%= i %>-3" onclick="answerSelected(this)">
//                 <p id="testA<%= i %>-3"></p>
//             </div>
//         </div>
//     </div>
//     <% } %>
//         <!-- End of for loop -->