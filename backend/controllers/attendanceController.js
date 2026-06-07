const Attendance = require("../models/Attendance");

const markAttendance = async (req, res) => {
  try {
    const attendance =
      await Attendance.create({
        ...req.body,
        status: "Pending",
      });

    res.status(201).json({
      success: true,
      message:
        "Attendance request submitted for approval",
      attendance,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAttendance = async (req, res) => {
  try {
    const records =
      await Attendance.find()
        .populate(
          "userId",
          "name email"
        )
        .sort({
          createdAt: -1,
        });

    res.json(records);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  markAttendance,
  getAttendance,
};