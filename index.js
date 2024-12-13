const express = require('express');
const app = express();
const port = process.env.PORT || 5050;

app.get('/', (req, res) => {
  res.send('Hello, World! This is a Node.js app inside Docker.');
});

app.get('/hello', (req, res) => {
  res.send('Hello, World! This is a Node.js app inside Docker.');
});

// If you're using the app with a test, export it for use in the test file
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;  // Export app for testing
