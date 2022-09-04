const pool = require("../db");

const getAllTasks = async (req, res) => {
    const allTasks = await pool.query(
        "SELECT * FROM task;"
        );
    console.log(allTasks);
    res.send("Retrieving a list of tasks.");
}

const getTasks = (req, res) => {
    res.send("Retrieving a single task.");
}

const createTasks = async (req, res) => {
    const { title, description } = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
            [title, description]
            );
        res.json(result.rows[0]);
    } catch(error) {
        //console.log(error.message);
        res.json({ error: error.message });
    }
}

const deleteTasks = (req, res) => {
    res.send("Deleting all task.");
}

const updateTasks = (req, res) => {
    res.send("Updating a task...");
}

module.exports = {
    getAllTasks,
    getTasks,
    createTasks,
    deleteTasks,
    updateTasks
}