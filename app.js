const mongoose = require("mongoose");

// This file uses Express to creat a server
// First two lines create a new express server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Bring in the Key for Mongo
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Tell express to use the newly imported routes
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

app.use("/api/users", users);
app.use("/api/tweets", tweets);
// Creates a basic route so we can render some info to page
app.get("/", (req, res) => res.send("Hey Young World, The World is Yours"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This tells our app which port to r
const port = process.env.PORT || 5000;

// Starts a socket and listens for connection the port
app.listen(port, () => console.log(`Server is running on port ${port}`));
