// 👇️ if using ES6 Imports uncomment line below
// import {readFileSync, promises as fsPromises} from 'fs';
const { readFileSync, promises: fsPromises } = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

    return arr;
}

syncReadFile('./files/simpson.txt');


let testLines = [];

console.log(testLines);

let testQuestions = [];
let testAnswers = [];

// 양자택일 설문조사에서 지문과 답변 분리해서 각 리스트에 저장해주는 함수
function testWith2A(testLines) {
    let j = 0;
    for (let i = 0; i < testLines.length; i++) {
        if (i % 3 == 0) {
            testQuestions.push(testLines[i]);
            j++;
        } else {
            for (let k = 0; k < 2; k++) {
                testAnswers[j - 1][k].push(testLines[i]);
            }
        }
    }
}

// 삼자택일 설문조사에서 지문과 답변 분리해서 각 리스트에 저장해주는 함수
function testWith3A(testLines) {
    let j = 0;
    for (let i = 0; i < testLines.length; i++) {
        if (i % 4 == 0) {
            testQuestions.push(testLines[i]);
            j++;
        } else {
            for (let k = 0; k < 3; k++) {
                testAnswers[j - 1][k].push(testLines[i]);
            }
        }
    }
}


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
>>>
>>> > 65e0 cd3(ADD & FIXED: 2022.10 .14 작업분)