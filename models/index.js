const db = require("../sequelize/models/");

module.exports = {
  users: {
    get: function() {
      return db.Users.findAll().then(data => {
        return data;
      });
    }
  },
  todos: {
    get: function() {
      return db.Todos.findAll().then(data => {
        return data;
      });
    }
  }
};
