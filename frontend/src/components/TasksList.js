import { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TasksList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const loadTasks = async () => {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
        });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
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
          key={task.id}
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
                  onClick={() => navigate(`/tasks/${task.id}/edit`)}
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
