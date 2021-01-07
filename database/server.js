const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const port = process.env.PORT || 4000;
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
}

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// Middleware - JSON parsing
app.use(express.json());

// Middleware - API routes
app.use("/company/users", routes.users);
app.use("/company/sales", routes.sales);
app.use("/company/auth", routes.auth);

// Listener
app.listen(port, () => console.log(`Server running on port ${port}`));