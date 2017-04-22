import mongoose from 'mongoose';
import { UserSchema, FoodSchema} from './reference/schemas';

//Creating database connections
var Users     = mongoose.createConnection("mongodb://localhost/users");
var Foods	  = mongoose.createConnection("mongodb://localhost/foods");

//Turning schemas into models
var User     = Users.model('User', UserSchema);
var Food	 = Foods.model('Food', FoodSchema);

//--Code relating to user creation below here--//
var possible_characters =[ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0 ,'a','b','c',
						'd','e','f','g','h','i','j','k','l','m','n','o','p',
						'q','r','s','t','u','v','w','x','y','z','A','B','C',
						'D','E','F','G','H','I','J','K','L','M','N','O','P',
						'Q','R','S','T','U','V','W','X','Y','Z']
// function gen_password() {
// 	let password = "";
// 	for (var i = 0; i < 8; i++) {
// 		password+=possible_characters[Math.floor(Math.random() * 62)];
// 	}
// 	return password;
// }

// function change_password(user, password, callback) {
// 	User.findOne({username: user}, (err, response) => {
// 		if (response != null) {
// 			response.password = password;
// 			response.save();
// 			callback("success")
// 		}
// 		else {
// 			callback("user not found");
// 		}
// 	})
// }

// function request_make_user(username, callback) {
// 	User.findOne({username: username}, (err, response) => {
// 		var password = gen_password();
// 		if (response == null) {
// 			(new User({username: username, password: password, admin:false})).save();
// 			callback({status: "success", password: password});
// 		}
// 		else {
// 			callback({status: "failure"});
// 		}
// 	})
// }

// function request_delete_user(username, callback) {
// 	User.findOne({username: username}, (err, response) => {
// 		if (response != null) {
// 			response.remove();
// 			callback({status: "success"});
// 		}
// 		else {
// 			callback({status: "failure"});
// 		}
// 	})
// }

// function reset_password(username, callback) {
// 	User.findOne({username: username}, (err, response) => {
// 		if (response != null) {
// 			let newpass = gen_password();
// 			response.password = newpass;
// 			response.save();
// 			callback({status: "success", password: newpass});
// 		}
// 		else {
// 			callback({status: "failure"});
// 		}
// 	})
// }

function submit_new_food(username, item, callback) {
	User.findOne({username: username}, (err, response) => {
		if (response != null) {
			(new Food({item: item, username: username})).save();
			callback({status: "success"});
		}
		else {
			callback({status: "failure"});
		}
	})
}

// Return a list of items matching the query near the user
function get_food_list(username, item, callback) {
	User.findOne({username: username}, (err, response) => {
		if (response != null) {
			// TODO: add foodlist shit here
		}
		else {
			callback({status: "failure"});
		}
	});
}

function delete_food(username, item, callback) {
	User.findOne({username: username}, (err, response) => {
		if (response != null) {

		}
		else {
			callback({status: "failure"});
		}
	});
}

function update_food(username, item, callback) {
	User.findOne({username: username}, (err, response) => {
		if (response != null) {

		}
		else {
			callback({status: "failure"});
		}
	});
}

function delete_food(username, item, callback) {
	User.findOne({username: username}, (err, response) => {
		if (response != null) {

		}
		else {
			callback({status: "failure"});
		}
	});
}

function interest_in_food(username, item, callback) {
	User.findOne({username: username}, (err, response) => {
		if (response != null) {

		}
		else {
			callback({status: "failure"});
		}
	});
}


export {submit_new_food, get_food_list, delete_food, update_food, delete};
