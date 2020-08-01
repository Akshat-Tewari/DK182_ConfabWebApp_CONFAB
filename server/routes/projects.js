const express = require("express");
const router = express.Router();

const ProjectCtrl = require("../controllers/project");
const UserCtrl = require("../controllers/user");

router.get("", UserCtrl.authMiddleware, ProjectCtrl.getAll);

router.get("/:slug", UserCtrl.authMiddleware, ProjectCtrl.getBySlug);

router.post("/new", UserCtrl.authMiddleware, ProjectCtrl.createProject);

router.delete("/:id", UserCtrl.authMiddleware, ProjectCtrl.deleteById);

module.exports = router;
