const mongoose = require("mongoose");
const TaskModel = require("../models/TaskModel");

// Create a task

const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await TaskModel.create({ title, description });
    res.status(200).json(task);
    console.log("cameee");
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// Get all Tasks

const getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find({});
    res.status(200).json(tasks);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// Get single Task

const getSingleTasks = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Task not found" });
  }
  try {
    const singletasks = await TaskModel.findById(id);
    res.status(200).json(singletasks);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// Update Task

const updateTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Task not found" });
  }
  try {
    const task = await TaskModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        ...req.body,
      }
    );
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};


// Delete Task

const deleteTask = async (req,res) =>{
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Task not found" });
  }
  try {
    const deletetasks = await TaskModel.findByIdAndDelete(id);
    res.status(200).json(deletetasks);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

module.exports = { createTask, getTasks, getSingleTasks ,updateTask , deleteTask};
