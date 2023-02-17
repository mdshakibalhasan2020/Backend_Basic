const express = require('express');
const HelloControllers = require("../controllers/HelloControllers");
const StudentsControllers = require("../controllers/StudentsControllers");
const TokenVerifyMiddleware = require("../middleware/TokenVerifyMiddleware");
const TokenIssueController = require("../controllers/TokenIssueController");
const router = express.Router();
// router.get("/hello-get",HelloControllers.HelloGet);
// router.post("/hello-post",HelloControllers.HelloPost);
router.get("/TokenIssue",TokenIssueController.TokenIssue);
router.post("/InsertStudent",TokenVerifyMiddleware,StudentsControllers.InsertStudent);
router.get("/ReadStudent",TokenVerifyMiddleware,StudentsControllers.ReadStudent);
router.post("/UpdateStudent/:id",TokenVerifyMiddleware,StudentsControllers.UpdateStudent);
router.get("/DeleteStudent/:id",TokenVerifyMiddleware,StudentsControllers.DeleteStudent);

module.exports = router;