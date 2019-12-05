const Project = require("../models/Project");

exports.getProjects = async (req, res) => {
  const projects = await Project.find().populate("tasks");
  res.status(200).json({ projects });
};

exports.getProject = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id).populate("tasks");
  res.status(200).json(project);
};

exports.createProject = async (req, res) => {
  const { title, description } = req.body;
  const { user } = req;

  const project = await Project.create({
    title,
    description,
    owner: user._id
  });

  res.status(201).json(project);
};
exports.updateProject = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;
  const project = Project.findByIdAndUpdate(id, { title, description });
  res.status(200).json(project);
};
exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  await Project.findByIdAndDelete(id);
  res.status(200).json({ message: "deleted" });
};
