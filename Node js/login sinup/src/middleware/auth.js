const jwt = require("jsonwebtoken");
const { model } = require("mongoose");
const user = require("../model/scema");

const auth = async (req, resp, next) => {
  try {
    const token = req.cookies.jwt;
    const payload = jwt.verify(token, process.env.SECREATE_KEY);

    if (payload) {
      console.log(payload._id);
      const users = await user.findById({ _id: payload._id });

      if (user) {
        req.user = users;
        req.token = token;

        next();
      } else {
        resp.send("anuthorized");
      }
    }
  } catch (e) {
    return resp.send("eror");
  }
};

module.exports = {
  auth,
};
