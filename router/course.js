const router = require('express').Router()
const Course = require('../app')

router.post("/add", (req,res) => {
    var course = new Course()
    course.courseName = req.body.courseName
    course.description = req.body.description
    course.id = req.body.id
    course.duration = req.body.duration
    course.cost = req.body.cost
    course.save()
    .then(()=>{
        res.redirect('/')
    })
    .catch((err) => console.log(err));
})
.get("/delete/:id", (req,res)=>{
    const id = req.params
    Course.deleteOne(id)
    .then(() => {
        // console.log("deleted")
        res.redirect('/view')
    })
    .catch((err) => console.log(err))
})
.get("/deleteAll", (req,res)=>{
    Course.deleteMany(req.id)
    .then(() => {
        console.log("deleted")
        res.redirect('/view')
    })
    .catch((err) => console.log(err))
})
module.exports = router