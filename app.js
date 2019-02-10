
var express = require('express'),
    app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.send('all is working well');
});

app.listen(8080);
module.exports.getApp = app;
