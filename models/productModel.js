const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
    },
    rating: {
      type: Number,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

// productSchema.methods.toJSON = function () {
//   const user = this;
//   const userObject = user.toObject();
//   delete userObject.password;
//   delete userObject.tokens;

//   return userObject;
// };

productSchema.index({ title: "text" }, { category: "text" });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
