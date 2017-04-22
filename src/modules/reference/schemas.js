import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  admin: Boolean,
})
UserSchema.index({username: 'text'});

export { UserSchema };
