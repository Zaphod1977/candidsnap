// server/index.js
const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from servers!" });
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

  // have NODE serve the files for our built react app
  app.use(express.static(path.resolve(__dirname, '../client/build')));

  // handle GET requests to /api route
  app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  // all other GET requests not handled before will return our React app
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
