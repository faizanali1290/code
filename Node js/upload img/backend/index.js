const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const connection = require("./connecton");
const Routing = require("./Routes/Routes");
connection();
// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Routing);
app.get("/", (req, resp) => {
  resp.send("home");
});
app.listen(port, () => {
  console.log("port is running " + port);
});
