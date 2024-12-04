const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');

dotenv.config();

const server = http.createServer(app)

server.listen(PORT,()=>{
    console.log(`Server created sucessfully on ${PORT}`)
})
