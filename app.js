var express = require("express");
var app = express();

//set ejs as a view engine
app.set('view engine', 'ejs');
app.use('/assets',express.static(__dirname + '/js'));

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(3030);