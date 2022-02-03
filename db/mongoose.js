const mongoose = require("mongoose");

try {
  let dbLink = "mongodb://127.0.0.1:27017/abannoub";
  mongoose.connect(dbLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB IS CONNECTED");
} catch (error) {
  console.log(error);
  console.log("Hello FROM DB ERROR");
}
