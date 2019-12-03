var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);


io.on('connection', function(socket){
    console.log('a user connected');
    socket.on("houseChange", function(data){
        console.log("houseChange");
        socket.broadcast.emit("houseChange", data);
        console.log(data);
    });
    socket.on("uvChange", function(data){
        console.log("uvChange");
        socket.broadcast.emit("uvChange", data);
        console.log(data);
    });
    socket.on("command", function(data){
        console.log("command");
        socket.broadcast.emit("command", data);
        console.log(data);
    });
});



app.get("/", (req, res, next) =>{
    res.sendFile(__dirname + "/dist/index.html");
});

app.use(express.static('dist'));

http.listen(8080, ()=>{
    console.log("Escutando na porta 8080");
})

console.log("Hello world!");