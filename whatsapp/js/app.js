var users = new UserCollection([{
    id: 1,
    name: 'Akku',
    status:'Happy'
   
}, {
    id: 2,
    name: 'Anu',
    status:'sad'
    
}, {
    id: 3,
    name: 'Arjun',
    status: 'excited'
   
}]);

var root = new Root({
    "users": users
       
});
root.render();
