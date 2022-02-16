const ProductModel = require("../models/productModel");

exports.createProduct = async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.send(newProduct);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

exports.searchProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.send(products);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

exports.uodateProduct = async (req, res) => {
  try {
    let _id = req.params.id;
    const newProduct = await ProductModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(newProduct);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    let _id = req.params.id;

    const deletedProduct = await ProductModel.findByIdAndDelete(_id);
    res.send({ msg: "Deleted" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
