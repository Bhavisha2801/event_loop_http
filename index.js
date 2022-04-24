const http = require('http');
const app = require('./app');
const PORT = 9002

http.createServer(app).listen(PORT , (request , response , next) => {
    console.log("server is running on PORT Number" , PORT)
});