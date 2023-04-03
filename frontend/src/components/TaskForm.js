import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Grid,
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const loadTask = async (id) => {
    const res = await fetch("http://localhost:3000/tasks/" + id);
    const data = await res.json();
    setTask({ title: data.title, description: data.description });
    setEditing(true);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (editing) {
        console.log("Use UPDATE!");
      } else {
        const res = await fetch("http://localhost:3000/tasks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(task),
        });
        const data = await res.json();
      }

      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) =>
    setTask({ ...task, [event.target.name]: event.target.value });

    useEffect(() => {
      if (params.id) {
        loadTask(params.id);
      }
    }, [params.id]);

    return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#1E272E",
            padding: "1rem",
          }}
        >
          <Typography variant="h5" textAlign="center" color="white">
            Create Task
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Write your Title"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="title"
                onChange={handleChange}
                value={task.title}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Write your Description"
                multiline
                rows={4}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="description"
                onChange={handleChange}
                value={task.description}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!task.title || !task.description}
              >
                { loading ? <CircularProgress color="inherit" size={25} /> : "Create" }
              </Button>
              </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
