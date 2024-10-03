const express = require('express');
const app = express();
const port = 5000;

// Define an API call
//TODO Decide how to filter this to get request info:
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});