const router = require('express').Router()
const Course = require('../app')


router.get('/', (req, res) => {
    res.render("index")
})
router.get('/view', async(req, res) => {
    const allCourse = await Course.find() 
    res.render("view", {course : allCourse})
})

module.exports = router