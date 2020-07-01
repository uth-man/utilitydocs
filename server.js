require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const path = require('path')

app.use(cors());
const port = process.env.PORT || 5000;

//Connecting DB
require("./model/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", require("./controller/user"));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('views-utilitydocs/build'))
  app.get('*', (req, res) => {
    res.sendFile(__dirname, 'views-utilitydocs', 'build', 'index.html');   //relative path
  })
}

//Error Handler
// app.use((err, req, res, next) => {
//   console.log(err.name);
// });

app.listen(port, () => {
  console.log("Listening to port " + port);
});
