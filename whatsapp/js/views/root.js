
var Root = Backbone.View.extend({
            el: '#root',
            
            initialize: function(options) {
                this.users = options.users;
            },
            
            render: function() {
                var list = new List({
                    "users": this.users
                });
                       
            this.$el.append('<div class="header">Contacts</div>');
            this.$el.append(list.render().el);
            return this;
   }
});