const { Router } = require("express");
const { getAllTasks } = require("../controllers/tasks.controller");

const router = Router();

router.get("/tasks", getAllTasks);

router.get("/tasks/10", (req, res) => {
    res.send("Retrieving a single task.");
});

router.post("/tasks", (req, res) => {
    res.send("Creating tasks.");
});

router.delete("/tasks", (req, res) => {
    res.send("Deleting all task.");
});

router.put("/tasks", (req, res) => {
    res.send("Updating a task...");
});

module.exports = router;
