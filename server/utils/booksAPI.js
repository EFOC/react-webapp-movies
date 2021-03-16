request = require('request');
require('dotenv').config();

const getBooks = (searchTitle, callback) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTitle}&key=${process.env.API_KEY}`;
    request({ url, json: true }, (error, response) => {
        if (error) {
            console.log('error');
            callback("Error");
        }
        console.log(response.body.items[0].volumeInfo.title);
        callback(response.body.items[0].volumeInfo.title);
    })
};

module.exports = getBooks;