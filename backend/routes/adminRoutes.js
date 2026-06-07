const express = require("express");
const router = express.Router();

const {
  getAllLeaves,
  updateLeaveStatus,
  getAllAttendance,
  updateAttendanceStatus,
} = require("../controllers/adminController");

/* -------- LEAVES -------- */

router.get("/leaves", getAllLeaves);

router.put(
  "/leave/:id",
  updateLeaveStatus
);

/* -------- ATTENDANCE -------- */

router.get(
  "/attendance",
  getAllAttendance
);

router.put(
  "/attendance/:id",
  updateAttendanceStatus
);

module.exports = router;