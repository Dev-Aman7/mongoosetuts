var express = require("express");
var User=require('./usermodel');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});
app.get("/getname", (req, res) => {
        User.find({})
        .exec(function(err,result){
            if(err)
            {
                console.log('error');
            }
            else
            {
                res.send(result);
            }

        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});