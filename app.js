// api 
const express = require('express');
const app = express();
const http = require('http');
//  nodejs module
const httpServer = require('http').createServer(app);
//  socket enbaled server
const io = require('socket.io')(httpServer);
io.on("connection", function (socket) {
    console.log(`${socket.id} New client connected`);
    // console.log();
    // socket.on("color", function (color) {
    //     // console.log(data);
    //     socket.broadcast.emit('colorchange', color);
    // })
    socket.on("md", function (point) {
        socket.broadcast.emit("onmd", point);
    })
    socket.on("mm", function (point) {
        socket.broadcast.emit("onmm", point);
    })
})


app.get("/" , function(req,res){
res.end("Welcome to home Page");
})

let port = process.env.PORT || 3000;
//  connection
httpServer.listen(port, function () {
    console.log("Server started at port 5000");
})