var User = Backbone.Model.extend({
	defaults: {
		'user_id': '',
		'user_name':'',
		'user_dp':'',
		'user_status': '',
		'user_last_seen':''
	},

});
var UserCollection = Backbone.Collection.extend({
	model: User,
	url: ''
});