//const pool = require("../db");

const getAllTasks = async (req, res) => {
    //const res ult = await pool.query("SELECT NOW();");
    //res.json(result.rows[0].now);
    res.send("Retrieving a list of tasks.");
}

module.exports = {
    getAllTasks
}