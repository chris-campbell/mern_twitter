const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require("./models/User");
const bodyParser = require("body-parser");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json());

//prettier-ignore
app.get("/", (req, res) => {
  const user = new User({
    handle: 'chris',
    email: "chris@gmail.com",
    password: 'chris1234'
  })
  user.save();
  res.send("Hey Young World, The World is Yours")
});


app.use("/api/users", users);
app.use("/api/tweets", tweets);
// Creates a basic route so we can render some info to page


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This tells our app which port to r
const port = process.env.PORT || 5000;

// Starts a socket and listens for connection the port
app.listen(port, () => console.log(`Server is running on port ${port}`));
