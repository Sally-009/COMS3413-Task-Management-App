const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const authMiddleware = require("../middleware/authMiddleware");

require("dotenv").config();

router.post("/", authMiddleware, async (req, res) => {
  console.log("task routes req", req.body);
  try {
    console.log("task routes req", req.body);
    const { taskName, description } = req.body;
    const newTask = new Task({
      taskName,
      description,
      user: req.user.id,
    });

    const savedTask = await newTask.save();
    console.log("task route saved task", savedTask);
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to add Task" });
  }
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    // this finds the tasks that matches the current users id
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to get tasks" });
  }
});

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { taskName, description } = req.body;

    // Find the task by ID and ensure it belongs to the authenticated user
    const task = await Task.findOne({ _id: req.params.id, user: req.user.id });

    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }

    // Update the task's fields
    task.taskName = task || task.taskName;
    task.description = description || task.description;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    console.error("Error updating Task:", error);
    res.status(500).json({ error: "Failed to update task" });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    // Find the task by ID and ensure it belongs to the authenticated user
    const task = await Task.findOne({ _id: req.params.id, user: req.user.id });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.deleteOne({_id: req.params.id});
    res.json({ message: "task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Failed to delete task" });
  }
});

module.exports = router;