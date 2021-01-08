const { count } = require('console');
var express = require('express');  
var app = express();  
var server = require('http').createServer(app); 
const bodyParser = require("body-parser"); 
var io = require('socket.io')(server);
const mongoose = require("mongoose")
const routes = require("./routes/routes")

app.use(express.static(__dirname + '/node_modules'));  
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});

app.use( 
    bodyParser.urlencoded({
        extended:false,
    })
);
app.use(bodyParser.json());

io.on('connection', function(client) {
    var count = 0
    count = count+1;
    console.log('Client connected...');
    console.log(count)
    client.on('disconnect', function(){
        count--;
        console.log(count)
    })
    client.on('join', function(data) {
        console.log(data);
     });
})

const db = require("./configs/keys").mongoURI;

mongoose
.connect(db, {useNewUrlParser: true,useUnifiedTopology: true})
.then(() => console.log("MongoDB successfully connected"))
.catch((err) => console.log(err))


app.use("/api/message", routes)
server.listen(4200);
console.log("It's workiiing!")