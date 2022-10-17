const express = require('express');
const app = express();

const PORT = 8080;

app.set('view engine','ejs');   
app.use('/views',express.static(__dirname + '/views'));
app.use('/static',express.static(__dirname + '/static'));


app.get('/start', function (req, res) {
    res.render('pages/start');
});

app.get('/pTest', function (req, res) {
    res.render('pages/pTest');
});

app.get('/result', function (req, res) {
    res.render('pages/result');
});


// 자바스크립트 연습용 페이지
app.get('/jstest',function(req, res){
    res.render('pages/test')
})


app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});
