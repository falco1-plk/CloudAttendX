const Leave = require("../models/leave");
const Attendance = require("../models/Attendance");

/* ---------------- LEAVES ---------------- */

const getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find().populate(
      "userId",
      "name email"
    );

    res.json(leaves);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateLeaveStatus = async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      { new: true }
    );

    res.json(leave);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* ---------------- ATTENDANCE ---------------- */

const getAllAttendance = async (
  req,
  res
) => {
  try {
    const attendance =
      await Attendance.find().populate(
        "userId",
        "name email"
      );

    res.json(attendance);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateAttendanceStatus =
  async (req, res) => {
    try {
      const attendance =
        await Attendance.findByIdAndUpdate(
          req.params.id,
          {
            status: req.body.status,
          },
          { new: true }
        );

      res.json(attendance);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

module.exports = {
  getAllLeaves,
  updateLeaveStatus,
  getAllAttendance,
  updateAttendanceStatus,
};