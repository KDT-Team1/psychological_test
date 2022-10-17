// 👇️ if using ES6 Imports uncomment line below
// import {readFileSync, promises as fsPromises} from 'fs';
const { readFileSync, promises: fsPromises } = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    return arr;
}

syncReadFile('./files/simpson.txt');


let testLines = [];

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
            j++;
        } else {
            arr.push(testLines[i]);
            if (arr.length == 3) {
                testAnswers.push(arr);
                arr = [];
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