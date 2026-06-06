const express = require("express");
const router = express.Router();

const {
  applyLeave,
  getLeaves,
} = require("../controllers/leaveController");

router.post("/", applyLeave);
router.get("/", getLeaves);

module.exports = router;