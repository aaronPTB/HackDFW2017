import mongoose from 'mongoose';
import { UserSchema, CardSchema} from './reference/schemas';

//Creating database connections
var Users     = mongoose.createConnection("mongodb://localhost/users");
var Cards	  = mongoose.createConnection("mongodb://localhost/foods");

//Turning schemas into models
var User     = Users.model('User', UserSchema);
var Card	 = Cards.model('Food', CardSchema);

//--Code relating to user creation below here--//
var possible_characters =[ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0 ,'a','b','c',
						'd','e','f','g','h','i','j','k','l','m','n','o','p',
						'q','r','s','t','u','v','w','x','y','z','A','B','C',
						'D','E','F','G','H','I','J','K','L','M','N','O','P',
						'Q','R','S','T','U','V','W','X','Y','Z']

function submit_new_food(username, item, callback) {
	User.findOne({username: username}, (err, response) => {
		if (response != null) {
			(new Card({item: item, username: username})).save();
			callback({status: "success"});
		}
		else {
			callback({status: "failure"});
		}
	})
}

// TODO: return a list of food matching item request.
function get_food_list(username, item, callback) {
	User.findOne({username: username}, (err, response) => {
		if (response != null) {
			// TODO: add foodlist shit here
			callback({status: "success"});
		}
		else {
			callback({status: "failure"});
		}
	});
}

function delete_food(id, callback) {
	Card.findOne({id: id}, (err, response) => {
		if (response != null) {
			response.remove();
			callback({status: "success"});
		}
		else {
			callback({status: "failure"});
		}
	});
}

// Update the description, cost, etc. of a food item
function update_food(id, callback) {
	Card.findOne({id: id}, (err, response) => {
		if (response != null) {
			// TODO: update properties of a food item
			callback({status: "success"});
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

function set_text_nbr(callback) {

}

export {submit_new_food, get_food_list, delete_food, update_food, interest_in_food, set_text_nbr};
