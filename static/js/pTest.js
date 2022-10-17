// 👇️ if using ES6 Imports uncomment line below
// import {readFileSync, promises as fsPromises} from 'fs';
const { readFileSync, promises: fsPromises } = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    return arr;
}

let testLines = syncReadFile('static/js/files/simpson.txt');

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