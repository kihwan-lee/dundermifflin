const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 4000;
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
}

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// Middleware - JSON parsing
app.use(express.json());

// Listener
app.listen(port, () => console.log(`Server running on port ${port}`));