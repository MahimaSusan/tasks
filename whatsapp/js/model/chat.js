var Chat = Backbone.Model.extend({
	defaults: {
		'id': '',
		'user_dp': '',
		'user_name': '',
		'message': ''
	},
});
var ChatCollection = Backbone.Collection.extend({
	model: Chat,
	url: ''
});