import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  admin: Boolean,
  number: String,
  picture: String,
  location: String,
  rating: Number,
  subscriptions: String,
})
UserSchema.index({username: 'text'});
var Card = new mongoose.Schema({
	item: String,
	user: String,
	number: String,
	location: String,
	rating: Number,
})
Card.index({item: 'text', user: 'text'})


export { UserSchema, Card };
