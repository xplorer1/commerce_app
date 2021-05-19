var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ShoppingCartSchema = new Schema({
	'user' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
    'items' : [
        {type: Schema.Types.ObjectId, ref: 'Item'}
    ],
    'lastmodified': {type: Date},
    'status' : {type: String, default: "PENDING"},
	'createdon' : {type: Date, default: Date.now()}
});

module.exports = mongoose.model('ShoppingCart', ShoppingCartSchema);