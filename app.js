const express = require('express');
const app = express();

const PORT = 8080;

app.set('view engine','ejs');   
app.use('/views',express.static(__dirname + '/views'));
app.use('/static',express.static(__dirname + '/static'));

app.get('/',function(req,res){
    res.render('pages/main');
})

app.get('/pTest', function (req, res) {
    res.render('pages/pTest');
});

app.get('/start', function (req, res) {
    res.render('pages/start');
});

app.get('/result', function (req, res) {
    res.render('pages/result');
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});