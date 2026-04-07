const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to ExpressJS Routing');
});

app.get('/student/:id', (req, res) => {
  res.send(`Student ID: ${req.params.id}`);
});

app.get(' /course/ :name/ :duration', (req, res) => {
    const { name, duration } = req.params;
    res.send(`Course Name: ${name}, Duration: ${duration}`);
  });

app.get('/search', (req, res) => {
    const { subject, level } = req.query;
    res.send(`Search Results for Subject: ${subject}, Level: ${level}`);
  });

  app.get('/build-url', (req, res) => {
    const url = '/student/101?role=monitor';
    res.send(`Generated URL: ${url}`);
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

