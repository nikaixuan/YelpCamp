var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var campgrounds = [
    {name: "Freemans", img:"http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx"},
    {name: "Schults", img:"https://i.pinimg.com/736x/83/e4/d6/83e4d67cf1b1158383c321f79f7b69bb--campsite-decorating-camping-decorations.jpg"},
    {name: "Mt.pinos", img:"https://static1.squarespace.com/static/5581d2d3e4b02b620931f85b/t/57559c5037013b5f8fab7b62/1482042675935/"}
];
app.use(bodyParser.urlencoded({extended: true}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
   res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new");
});

app.post("/campgrounds", function(req, res){
    var newname = req.body.sitename;
    var newurl = req.body.url;
    var newcamp = {};
    newcamp["name"] = newname;
    newcamp["img"] = newurl;
    campgrounds.push(newcamp);
    res.redirect("/campgrounds");
});

module.exports = app;
