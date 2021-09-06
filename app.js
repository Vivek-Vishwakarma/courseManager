var express = require('express')
const mongoose = require('mongoose');
const port = process.env.PORT || 5000 ;

mongoose.connect('mongodb://localhost/courseManage', {useNewUrlParser: true, useUnifiedTopology : true});

var app = express()

app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))
app.set("view engine", "ejs")

//Mongodb stuff
const courseSchema = new mongoose.Schema({
        courseName : {
            type : String
        },
        description : {
            type : String
        },
        id : {
            type : String
        },
        duration : {
            type : String
        },
        cost : {
            type : String
        }
})

module.exports = new mongoose.model("course",courseSchema)

app.use(require("./router/router"))
app.use(require("./router/course"))


app.listen(port,() => {
    console.log(`listening at port ${port}`);
});