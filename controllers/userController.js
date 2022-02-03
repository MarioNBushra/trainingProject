const UserModel = require("../models/UserModel");

exports.signup = async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
