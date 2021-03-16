const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const booksAPI = require('./utils/booksAPI');

const app = express();
app.use(express.static(path.join(__dirname, '../build')));

app.use(function (req, res, next) {

//     // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
    next();
});

app.get('/getbooks', function (req, res) {
    booksAPI(req.query.bookname, (book, error) => {
        if(error) {
            return res.send({book_name : "Error, couldn't connect to API"});
        }
        return res.send({book_name : book});
    });
});

app.get('/ping', function (req, res) {
    return res.send({TEST : "TEST"});
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(process.env.PORT || 8080)