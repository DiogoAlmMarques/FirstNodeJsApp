// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

 // emit of an object class needs a listener
 // use emit to emit
 // and on to listen needs to be a function needs to be first
 // use modelus to call in  app

// const EventEmmitter = require('events');


// const Logger = require('./logger');
// const logger = new Logger();

// //register a listener
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// });

// logger.log('message');

 //fiquei no 1:11:26 do tutorial https://www.youtube.com/watch?v=TlB_eWDSMt4
 // o outro tuto https://www.youtube.com/watch?v=EMwu8F0dCXE

//Tutorial https://www.youtube.com/watch?v=rt9AS79ppnM

var express = require("express");
var path = require('path');

var routes = require("./routes");
var app = express();

app.set("port",process.env.PORT || 3000);
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(routes);

app.listen(app.get("port"),function(){
    console.log("Server started on port " + app.get("port"))
});


//Tutorial https://www.youtube.com/watch?v=rt9AS79ppnM
