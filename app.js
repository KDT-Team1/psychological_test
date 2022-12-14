const express = require('express');
const app = express();

const PORT = 8080;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));


app.get('/', function (req, res) {
    res.render('pages/main');
});

app.get('/start', function(req, res) {
    res.render('pages/start');
});
app.get('/start_simpson', function(req, res) {
    res.render('pages/start_simpson');
});
app.get('/start_disney', function(req, res) {
    res.render('pages/start_disney');
});

app.get('/start_halloween', function(req, res) {
    res.render('pages/start_halloween');
});


app.get('/test_simpson', function(req, res) {
    res.render('pages/test_simpson');
});
app.get('/test_disney', function(req, res) {
    res.render('pages/test_disney');
});
app.get('/test_halloween', function(req, res) {
    res.render('pages/test_halloween');
});


app.get('/result_simpson', function(req, res) {
    res.render('pages/result_simpson');
});
app.get('/result_disney', function(req, res) {
    res.render('pages/result_disney');
});
app.get('/result_halloween', function(req, res) {
    res.render('pages/result_halloween');
});

app.get('/mypage', function(req, res) {
    res.render('pages/mypage');
});

app.get('/allresult_simpson', function(req, res) {
    res.render('pages/allresult_simpson');
});

app.get('/allresult_disney', function(req, res) {
    res.render('pages/allresult_disney');
});

app.get('/allresult_halloween', function(req, res) {
    res.render('pages/allresult_halloween');
});



app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});