const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, My Server!');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});