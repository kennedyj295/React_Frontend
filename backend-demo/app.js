const express = require('express');
const app = express();
const port = 3001; // Make sure this port is different from the React app's port

const cors = require('cors');
app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
