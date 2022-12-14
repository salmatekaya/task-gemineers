const express = require("express");
const app = express();

// Allocating process module
const process = require('process');
// Calling process.cpuUsage() method
const usage = process.cpuUsage();

app.get("/api", (req, res) => {
    res.json(usage);
  });
     
app.listen(5000, () =>{console.log("Server started on port 5000")});