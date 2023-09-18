require("dotenv").config();

const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const registerusers = require("./src/model/scema");
const fs = require("fs");
require("./src/db/connect");
const bctyptjs = require("bcryptjs");
const app = express();
const port = process.env.PORT || 3000;
let z = path.join(__dirname, "../public/boostrap.min.css");
const { auth } = require("./src/middleware/auth");
app.use(express.json());
const bodyParser = require("body-parser");
const { json } = require("express");
const { log } = require("util");
app.use(bodyParser.urlencoded({ extended: false }));
const formpath = path.join(__dirname, "/public/form.html");

app.use(cookieParser());

let formfile = fs.readFileSync(formpath, "utf-8");

//post method

app.get("/registerform", async function f(req, resp) {
  app.use(express.static(path.join(__dirname, "/public")));
  resp.send(formfile);
});

app.post("/registerform", async (req, resp) => {
  try {
    if (req.body.password === req.body.confrimpassword) {
      const emailExists = await registerusers.findOne({
        email: req.body.email,
      });

      if (emailExists) {
        resp.send(`Email "${req.body.email}" already exists`);
      }

      // get value input user
      else {
        let pas = await bctyptjs.hash(req.body.password, 12);

        let data = await registerusers({
          name: req.body.fristname + req.body.lastname,
          email: req.body.email,
          password: pas,
          gender: req.body.exampleRadios,
          agree: req.body.agree,
        });

        // the response.cookie() function is used to set the cookie name to value
        // the value prameter ma be a string or object converted to string
        // syntax res.cookie(name,value,[option])

        // store input value in data base

        // console.log(data)

        // const token = await data.generatetoken()

        // resp.cookie('jwt', token, {
        // expires: new Date(Date.now() + 3000),
        // httpOnly: true

        // httpOnly tell that the client side scripting language may not be effect the token
        // })

        // console.log(token)
        await data
          .save()
          .then((result) => {
            resp.send("congarulation your form have been submit");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      resp.send("password is incoorect");
    }
  } catch (error) {
    console.log(error);
  }
});

// login
const login = fs.readFileSync(
  path.join(__dirname, "/public/login.html"),
  "utf-8"
);

app.get("/login", (req, resp) => {
  resp.send(login);
});

app.post("/login", async (req, resp) => {
  try {
    const email = req.body.email;
    const pas = req.body.password;
    const login = await registerusers.findOne({ email: email });

    const isMatch = await bctyptjs.compare(pas, login.password);

    console.log(isMatch);

    if (isMatch) {
      let token = await login.generatetoken();
      resp.cookie("jwt", token);
      resp.send("home page");
    } else {
      resp.send("email or password is incorect");
    }
  } catch (error) {
    resp.send("email or password is incorect");
  }
});

app.get("/secreate", auth, (req, resp) => {
  // const cok = req.cookies.jwt

  resp.send("secreate");
});

app.get("/logout", auth, async (req, resp) => {
  try {
    // const token = req.header('Authorization').replace('Bearer ', '');

    resp.clearCookie("jwt");

    // req.user.tokens = req.user.tokens.filter((ele, ind) => {
    //     return req.token !== ele

    // })
    req.user.tokens = [];

    await req.user.save();

    resp.send("logout successfully");
  } catch (e) {
    resp.send("server can not logout the user");
  }
});

console.log(process.env.SECREATE_KEY);

app.listen(port, () => {
  console.log("port is running");
});

// async function f() {
//     let g = await bctyptjs.compare('faizan','$2a$12$xAjcIjG8slOqPee6mLs.vOeQ42XQohkYELV/u7K7G0r3MBWVMMiNu')
//     console.log(g)
// }
// f()
