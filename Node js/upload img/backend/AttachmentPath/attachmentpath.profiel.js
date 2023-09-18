const multer = require("multer");
// const path = require("path");
// const storeimage = path.join(__dirname, "/images");
// console.log(storeimage);
const profilePath = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./image");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + Date.now().toString());
      // cb(null, file.originalname + "-" + uniqueSuffix);
    },
  }),
}).single("file");

const multiplePost = multer({
  storage: multer.diskStorage({
    destination: function (req, resp, cb) {
      cb(null, "./images");
    },
    filename: function (req, file, cb) {
      const filename = file.fieldname + Date.now().toString();
      cb(null, filename);
    },
  }),
}).array("file", 10);
module.exports = {
  profilePath,
  multiplePost,
};
