import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function TasksList() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1>TasksList</h1>
      {
        tasks.map((task) => (
          <Card>
            <CardContent>
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
          </CardContent>
        </Card>
        ))
      }
    </>
  )
}
