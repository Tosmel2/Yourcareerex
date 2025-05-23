const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: { 
    type: String, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    enum: ["student", "instructor"], 
    default: "student" 
},
});
module.exports = mongoose.model("User", userSchema);
