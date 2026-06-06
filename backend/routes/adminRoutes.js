const express = require("express");
const router = express.Router();

const {
  getAllLeaves,
  updateLeaveStatus,
} = require("../controllers/adminController");

router.get("/leaves", getAllLeaves);

router.put(
  "/leave/:id",
  updateLeaveStatus
);

module.exports = router;