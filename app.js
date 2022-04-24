const express = require('express');
const app = express();


app.get('',(request,response,next) => {
    console.log("Hello")
    response.send("Hello")
})

app.get('/books' , (request , response , next) => {
    response.json({
        "book1" : "Don Quixote",
        "book2" : "A Tale of Two Cities",
        "book3" : "The Lord of the Rings",
        "book4" : "The Little Prince"
    })
})







module.exports = app;