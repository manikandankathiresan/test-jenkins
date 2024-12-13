const express = require('express');
const app = express();
const port = process.env.PORT || 5050;

app.get('/', (req, res) => {
  res.send('Hello, World! This is a Node.js app inside Docker.');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
