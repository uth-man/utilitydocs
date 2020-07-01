const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) console.log("Error : " + err.message);
    else {
      console.log("Database Connected Successfully!");
    }
  }
);

module.exports = mongoose;
