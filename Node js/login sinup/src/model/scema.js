const mongoose = require("mongoose");
const bct = require("bcryptjs");
const jwt = require("jsonwebtoken");

const schema = new mongoose.Schema({
  name: {
    type: String,
    validate(value) {
      if (value.length === 90) {
        throw new Error("email already exist");
      }
    },
  },

  email: {
    type: String,
  },
  password: {
    type: String,
  },
  gender: {
    type: String,
    unqiue: false,
  },

  agree: {
    type: String,
    unqiue: false,
  },
  expiresAt: {
    type: Date,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// schema.pre('save', async function (next) {
//     if (this.isModified) {

// this.password = await bct.hash(this.password, 10)
// next()

//     }

// })

schema.methods.generatetoken = async function () {
  try {
    const expireUser = new Date().getTime() + 3600 * 1000;
    const token = await jwt.sign(
      { _id: this._id.toString() },
      process.env.SECREATE_KEY,
      {
        expiresIn: expireUser,
      }
    );

    this.tokens = await this.tokens.concat({ token: token, expireUser });
    this.expiresAt = expireUser;
    console.log("fa");
    await this.save();
    return token;
  } catch (error) {
    console.log("error");
  }
};

const registerusers = new mongoose.model("registerusers", schema);

const cron = require("node-cron");

// cron.schedule('0 */3 * * *', async () => {

//         try {
//             const CTime = new Date()
//             const TokenExpireUser = await registerusers.find({ expiresAt: { $lte: CTime } })

//             TokenExpireUser.forEach(async (user) => {
//                 user.tokens = user.tokens.filter((token) => {
//                     return token.expiresAt >= CTime
//                 })

//                 await user.save()
//             })

//             console.log('Successfully removed expired tokens')
//         } catch (e) {
//             console.log('Failed to remove expired tokens:', e)
//         }

// })

module.exports = registerusers;
