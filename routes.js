const express = require('express');


app.get('/', (req, res) => {
    res.send('Hello, Welcome to nodeJs API');
})

app.get('/blog', (req, res) => {
    res.send('This is blog api');
});

app.get('homePage', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})