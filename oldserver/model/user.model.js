const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: String,
})

module.exports = mongoose.model('User', UserSchema)