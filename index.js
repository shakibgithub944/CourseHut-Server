const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');

app.use(cors());

const courses = require('./Data/course.json');

app.get('/', (req, res) => {
    res.send('Course server is running.....');
});

app.get('/Course', (req, res) => {
    res.send(courses);
})

app.get('/Course/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course => course.id == id);
    res.send(course);
})
app.get('/Course/:id/CheckOut', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course => course.id == id);
    res.send(course);
})

app.listen(port, () => {
    console.log('server running on port ', port);
})

