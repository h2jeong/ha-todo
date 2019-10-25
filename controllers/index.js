const models = require("../models");

module.exports = {
  users: {
    get: async (req, res) => {
      try {
        let data = await models.users.get();
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    }
  },
  todos: {
    get: async (req, res) => {
      try {
        let data = await models.todos.get();
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    }
  }
};
