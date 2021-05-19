var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var bcrypt = require('bcrypt');
var saltRounds = 10;

var UserSchema = new Schema({
	'email' : {type: String, lowercase: true},
	'verified' : false,
    'verificationcode': String,
    'verifiedon': Date,
	'firstname' : String,
	'lastname' : String,
    'password': String,
    'role' : String,
    'passwordresettoken': "",
	'passwordresettokenexpires': Date,
	'createdon' : {type: Date, default: new Date()}
});

// hash the password before the user is saved
UserSchema.pre('save', function (next) {
    var user = this;

    // hash the password only if the password has been changed or user is new
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(saltRounds, function(err, salt) {
	    bcrypt.hash(user.password, salt, function(err, hash) {
	        // change the password to the hashed version
	        user.password = hash;
	        next();
	    });
	});
});

// method to compare a given password with the database hash
UserSchema.methods.comparePassword = function (password) {
	var user = this;
	
	bcrypt.compare((user.password, password), function(err, result) {
		if(err) return err.message;
		
    	return result
	});
};
module.exports = mongoose.model('User', UserSchema);
