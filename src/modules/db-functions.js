import mongoose from 'mongoose';
import { UserSchema } from './reference/schemas';

//Creating database connections
var Users     = mongoose.createConnection("mongodb://localhost/users");

//Turning schemas into models
var User     = Users.model('User', UserSchema);

//--Code relating to user creation below here--//
var possible_characters =[ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0 ,'a','b','c',
						'd','e','f','g','h','i','j','k','l','m','n','o','p',
						'q','r','s','t','u','v','w','x','y','z','A','B','C',
						'D','E','F','G','H','I','J','K','L','M','N','O','P',
						'Q','R','S','T','U','V','W','X','Y','Z']
function gen_password() {
	let password = "";
	for (var i = 0; i < 8; i++) {
		password+=possible_characters[Math.floor(Math.random() * 62)];
	}
	return password;
}

function change_password(user, password, callback) {
	User.findOne({username: user}, (err, response) => {
		if (response != null) {
			response.password = password;
			response.save();
			callback("success")
		}
		else {
			callback("user not found");
		}
	})
}

function request_make_user(username, callback) {
	User.findOne({username: username}, (err, response) => {
		var password = gen_password();
		if (response == null) {
			(new User({username: username, password: password, admin:false})).save();
			callback({status: "success", password: password});
		}
		else {
			callback({status: "failure"});
		}
	})
}

function request_delete_user(username, callback) {
	User.findOne({username: username}, (err, response) => {
		if (response != null) {
			response.remove();
			callback({status: "success"});
		}
		else {
			callback({status: "failure"});
		}
	})
}

function reset_password(username, callback) {
	User.findOne({username: username}, (err, response) => {
		if (response != null) {
			let newpass = gen_password();
			response.password = newpass;
			response.save();
			callback({status: "success", password: newpass});
		}
		else {
			callback({status: "failure"});
		}
	})
}

export {update_db, update_elevator, get_messages, get_elevators,
	 		  User, Message, Elevator, dump, change_password,
				request_make_user, request_delete_user, reset_password};
