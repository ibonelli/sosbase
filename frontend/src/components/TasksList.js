import { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function TasksList() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
    console.log(res);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1>TasksList</h1>
      {
        tasks.map((task) => (
          <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
            }}
          >
            <CardContent
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ color: "white" }}>
                <Typography>{task.title}</Typography>
                <Typography>{task.description}</Typography>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => console.log('edit')}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      }
    </>
  )
}
