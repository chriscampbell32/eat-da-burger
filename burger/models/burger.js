 // 3. Inside `burger.js`, import `orm.js` into `burger.js`

 //        4. Inside `burger.js` create the code that will call the orm functions using burger specific input for the orm

 //        5. Export at the end of the `burger.js` file

var orm = require("../config/orm.js");



var burgers = {
  addBurger: function(nameInput, cb){
    orm.insertOne("burgers", nameInput, cb);
  },
  devourBurger: function(inputId, cb){
    orm.updateOne("burgers", inputId, cb);
  },
  findAll: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  }
};

module.exports = burgers;