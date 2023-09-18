const fs = require("fs");
const http = require("http");
const path = require("path");

const index = path.join(__dirname, "../public/index.html");
const img = path.join(__dirname, "../public/faizan.png");

// console.log(index);
const file = fs.readFileSync(index, "utf-8");
const imgr = fs.readFileSync(img, "base64");
// console.log(imgr);

// const File=new FileReader()

// console.log(file);
// let formfile = fs.readFileSync(path, "utf-8");


const server = http.createServer((req, resp) => {
  if (req.url == "/") {
    resp.end(file);
    // resp.end("as expexted");
  } else if (req.url == "/img") {
    // image
    resp.json({me:"poqwj"});
  }
});

server.listen(3000, () => {
  console.log("port is lisinig" + 3000);
});
