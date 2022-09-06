const { Router } = require("express");
const { getAllTasks, getTasks, createTasks, deleteTasks, updateTasks } = require("../controllers/tasks.controller");

const router = Router();

router.get("/tasks", getAllTasks);

router.get("/tasks/:id([0-9]+)", getTasks);

router.post("/tasks", createTasks);

router.delete("/tasks/:id([0-9]+)", deleteTasks);

router.put("/tasks", updateTasks);

module.exports = router;
