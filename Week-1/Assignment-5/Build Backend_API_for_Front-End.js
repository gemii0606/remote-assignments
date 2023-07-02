const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, My Server!');
});

app.get('/data', (req, res) => {
    const number = req.query.number;
  
    if (!number) {
      res.send('Lack of Parameter');
    } else if (isNaN(number)) {
      res.send('Wrong Parameter');
    } else {
      const n = parseInt(number);
      const result = (n * (n + 1)) / 2;
      res.send(`${result}`);
    }
  });

app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});