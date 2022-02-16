const mongoose = require("mongoose");

try {
  let dbLink = process.env.DB_URL || "mongodb://127.0.0.1:27017/abannoub";
  mongoose.connect(dbLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB IS CONNECTED");
} catch (error) {
  console.log(error);
}
