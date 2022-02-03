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

exports.signin = async (req, res) => {
  try {
    const user = await UserModel.findByCredentials(
      req.body.email,
      req.body.password
    );

    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
