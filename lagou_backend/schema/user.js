var mongoose =require("mongoose");
var UserSchema = mongoose.Schema({
	phone : String,
	psw : String,
	name : String,
})
module.exports = UserSchema;