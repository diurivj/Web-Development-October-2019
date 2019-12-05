const express = require("express");
const router = express.Router();
const catchErrors = require("../middlewares/catchErrors");
const {
  createProject,
  getProject,
  getProjects,
  updateProject,
  deleteProject
} = require("../controllers/projectsController");

const {
  getTask,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/tasksController");

/* GET home page */
router.get("/", (req, res, next) => {
  res.send("Bienvenido a la api de Projectos de Ironhack");
});

// Projects
router.get("/projects", catchErrors(getProjects));
router.get("/projects/:id", catchErrors(getProject));
router.post("/projects", catchErrors(createProject));
router.patch("/projects/:id", catchErrors(updateProject));
router.delete("/projects/:id", catchErrors(deleteProject));

// Tasks
router.get("/tasks/:id", catchErrors(getTask));
router.post("/tasks", catchErrors(createTask));
router.patch("/tasks/:id", catchErrors(updateTask));
router.delete("/tasks/:id", catchErrors(deleteTask));

module.exports = router;
