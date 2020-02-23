const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./server/routes/api.js");
const errorHandler = require('./server/middlewares/errorHandler')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'build')))
app.use("/", api);
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
app.use(errorHandler)
app.listen(port, () => console.log(`Server is running on port ${port}`));