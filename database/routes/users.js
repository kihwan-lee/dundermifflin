// imports
const router = require("express").Router();
const ctrl = require("../controllers");

// routes
router.get("/", ctrl.users.index);
router.post("/", ctrl.users.create);
router.put("/:id", ctrl.users.update);
router.delete("/:id", ctrl.users.destroy);

// exports
module.exports = router;
