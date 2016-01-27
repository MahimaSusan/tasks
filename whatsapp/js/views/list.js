
var ListItem = Backbone.View.extend({
    tagName: 'li',
    
    /*className: 'list-group-item',*/
    /*className: 'table',*/
    className: 'list-group-item',
    
    initialize: function(options) {
        this.users = options.users;
        
    },
   
    render: function() {

        var userId  = parseInt( this.model.get('id') );
        var users = this.users.findWhere({ id: userId });



        /*var tmp = "<table><tr><a><%= user_name %></a></tr><tr><td><%=status%></td></tr></table>";*/
        var tmp = "<center><a><%=user_name%></a><br><%=status%></center>";
        this.temp = _.template(tmp);
        
        var EN = {
            user_name: users.get('name'),
            status: users.get('status')
        }
        
        this.complied = this.temp(EN);
        // console.log(this.complied);
        this.$el.append(this.complied);
        
        return this;
    }
});

var List = Backbone.View.extend({
    tagName: 'ul',
    
    className: 'list-group',
    
    initialize: function(options) {
        this.users = options.users;
       
    },
   
    allRender: function() {
        var li, html = [];
        this.users.each(function(mod) {
            
            li = new ListItem({
                model: mod,
                users : this.users
            });

            html.push(li.render().el);
        });

        this.$el.html(html);
    },
    
   render: function(mod, col, action) {
        if (!action) {
            this.allRender();
        } else if (!!action && action.add) {
            li = new ListItem({
                model: mod,
                users : this.users
            });
            this.$el.append(li.render().el);
        };
       
        return this;
    }
});