import mongoose from 'mongoose';

// Account 
var UserSchema = new mongoose.Schema({
  username: String,							// Username
  password: String,							// Password
  admin: Boolean,							// Admin status
  phone: String,							// Phone number
  picture: String,							// Picture of user
  location: String,							// Location
  rating: Number,							// "Freshness" rating
  subscriptions: String,					// Table of subscriptions 
})
UserSchema.index({username: 'text'});		// Search username

// A "Card" of an item being sold be an Account
UserSchema.index({username: 'text'});
var CardSchema = new mongoose.Schema({
	item: String,							// Item name
	cost: Number,							// Costs of the item
	user: String,							// Uploader/seller
	phone: String,							// Phone number of contact
	location: String,						// Location of seller
	rating: Number,							// Current rating of item sold
	tags: String							// Searchable tags of item
	description: String, 					// Text description of item
	//picutre: String, 						// Picture of the item being sold
})
// Search by item, seller, and tags of the item
CardSchema.index({item: 'text', user: 'text', tags: 'text'})


export { UserSchema, CardSchema };
