
const express = require('express');
var fs = require("fs");
var https = require("https");
const app = express();
const path = require('path');

app.set("/", "html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index');
});

https
  .createServer(
    {
      key: fs.readFileSync("certs/server.key"),
      cert: fs.readFileSync("certs/server-certificate.crt"),
    },
    app
  )
  .listen(3000, () => {
    console.log("Listening on https://localhost:3000");
});