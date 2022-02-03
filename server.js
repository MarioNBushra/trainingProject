const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5052;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//cors
const cors = require("cors");

app.use(cors());

//DB Connection
require("./db/mongoose");
const userRoutes = require("./routes/userRoutes");
// const productRoutes = require("./routes/productRoutes");
// const catRoutes = require("./routes/catRoutes");
// const publicAPIsRoutes = require("./routes/publicAPIsRoutes");
// const testRoutes = require("./routes/offerRoutes");
// const orderRoutes = require("./routes/orderRoutes");
// const cartRoutes = require("./routes/cartRoutes");
// const appetiserRoutes = require("./routes/appetiserRoutes");
// const shippingFeeRoutes = require("./routes/shippingFeeRoutes");
// const adminsRoutes = require("./routes/adminsRoutes");
// const promoCodesRoutes = require("./routes/promoCodeRoutes");
// const cahbackPercentage = require("./routes/cashbackPercentage");

app.use("/api/user", userRoutes);
// app.use("/api/product", productRoutes);
// app.use("/api/cat", catRoutes);
// app.use("/api/upload", publicAPIsRoutes);
// app.use("/api/offer", testRoutes);
// app.use("/api/order", orderRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/appetiser", appetiserRoutes);
// app.use("/api/shipping/fees", shippingFeeRoutes);
// app.use("/api/admin", adminsRoutes);
// app.use("/api/promo", promoCodesRoutes);
// app.use("/api/cash", cahbackPercentage);

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
