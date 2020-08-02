const express = require("express");
const router = express.Router();

const ProjectCtrl = require("../controllers/project");
const UserCtrl = require("../controllers/user");

router.get("",  ProjectCtrl.getAll);

router.get("/get/Data",  ProjectCtrl.getData);

router.get("/:slug",  ProjectCtrl.getBySlug);




router.post("/new", ProjectCtrl.createProject);

router.delete("/:id",  ProjectCtrl.deleteById);

module.exports = router;
