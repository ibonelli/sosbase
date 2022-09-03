const { Router } = require("express");
const { getAllTasks, getTasks, createTasks, deleteTasks, updateTasks } = require("../controllers/tasks.controller");

const router = Router();

router.get("/tasks", getAllTasks);

router.get("/tasks/10", getTasks);

router.post("/tasks", createTasks);

router.delete("/tasks", deleteTasks);

router.put("/tasks", updateTasks);

module.exports = router;
