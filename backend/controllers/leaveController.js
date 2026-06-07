const Leave = require("../models/Leave");

const applyLeave = async (req, res) => {
  try {
    const leave = await Leave.create(req.body);

    res.status(201).json({
      success: true,
      leave,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find();

    res.json(leaves);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  applyLeave,
  getLeaves,
};
