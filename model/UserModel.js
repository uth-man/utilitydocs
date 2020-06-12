const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  formData: {
    personal: {},
    education: [{}],
    experience: [{}],
    skills: [{}],
    hobbies: [{}],
  },
});
const model = mongoose.model("Users", UserSchema);
module.exports = model;
