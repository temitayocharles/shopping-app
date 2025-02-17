const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());  // Parse JSON requests

// Connect to MongoDB
mongoose.connect('mongodb+srv://user1:F2QgKxJBX7huFMzg@cluster1.zewgy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

// Basic Route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
