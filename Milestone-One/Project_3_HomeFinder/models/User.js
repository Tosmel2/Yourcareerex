const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    enum: ['user', 'agent'], 
    default: 'user' 
  }
});


module.exports = mongoose.model('User', userSchema);


// role: { type: String, enum: ['agent', 'user'], default: 'user' }