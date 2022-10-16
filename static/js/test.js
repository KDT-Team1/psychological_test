// <!-- 자바스크립트 연습용 파일입니다 -->

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

//     <!-- 자바스크립트 연습용 파일입니다 -->
    
//     <% const text=[['해야할 일이 많을 때?','계획을 세워서 최대한 빨리 처리한다.','미루고 미루다 마감일 하루 전에 처리한다','주변 사람의 도움을 받는다.'],['친구의 고민을 들어줄 때?','해결책을 제시해준다.','일단 공감해준다','비슷한 나의 경험을 들려준다']]; %>
    
//     <% const answer = ['answer1','answer2']%>

//     <% let res =0; %>

//     <%  for(let i=0; i<text.length; i++){ %>
//         <div><%=text[i][0]; %></div><br>
//         <%for(let j=1; j<text[i].length; j++){ %>
//                 <input type="radio" name="<%=`${answer[`${i}`]}` %>" value="<%=j; %>"><%=j %>
//                 <div><%= text[i][j]; %></div>
//             <% } %> <br><br><br>
//         <% } %>
//     <br><button onclick="getResult(2)">결과보기</button><br><br>





//     <div>결과값</div>
//     <div id='result'></div>



//     <script>

//         // 체크값을 다 더하는 함수
//         function getResult(n) {
//             let result=0;
//             for(let i = 1; i<=n; i++){
//                 const resultList=document.getElementsByName('answer'+i);
//                 resultList.forEach((node) => {
//                 if(node.checked)  {
//                     result+=parseInt(node.value);
//                 }
//                 }) 
//             }
//             document.getElementById('result').innerText = result;
//         }
//     </script>


// </body>
// </html>
