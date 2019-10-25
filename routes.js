var controller = require("./controllers");
var router = require("express").Router();

router.get("/users", controller.users.get);
router.get("/todos", controller.todos.get);

module.exports = router;
