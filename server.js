const express = require('express');
const path = require('path');

const server = express();
const PORT = 4000;

server.use("/", express.static(path.join(__dirname, '/dist')))
server.get("*",(req, res) => {
    res.sendFile(path.join(__dirname, '/dist/error/index.html'))
})

server.listen(PORT, () => {
    console.log(`Порт: ${PORT}!`);
});