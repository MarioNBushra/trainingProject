const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", ""); //Bearer is not important we can type any word
    console.log(token, "TOKEN");
    const decoded = jwt.verify(token, "abanoub");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    console.log(user, "USER");

    if (!user) {
      throw new Error("Not User");
    }

    req.token = token;
    req.user = user;

    next();
  } catch (e) {
    res.status(401).send({ error: "Please Authonticate" });
    console.log(e);
  }
};

module.exports = auth;
