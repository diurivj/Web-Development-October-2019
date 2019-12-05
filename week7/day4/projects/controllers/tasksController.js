const Task = require("../models/Task");
const Project = require("../models/Project");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
};

exports.getTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  res.status(200).json(task);
};

exports.createTask = async (req, res) => {
  const { title, description, project } = req.body;
  const task = await Task.create({
    title,
    description,
    project
  });
  await Project.findByIdAndUpdate(project, { $push: { tasks: task._id } });
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;
  const task = Task.findByIdAndUpdate(id, { title, description });
  res.status(200).json(task);
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.status(200).json({ message: "deleted" });
};
