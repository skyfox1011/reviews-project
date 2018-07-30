var express = require('express');
var app = express();
var path = require('path');

const SRC_DIR = path.resolve(__dirname, 'public');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(SRC_DIR + '/index.html'));
});

app.listen(3000);