import { useEffect, useState } from "react";
import { Grid, Card, Typography, CardContent, TextField, Button } from "@mui/material";

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async(event) => {
    event.preventDefault();

    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    console.log(data);
  };

  const handleChange = (event) =>
    setTask({ ...task, [event.target.name]: event.target.value });

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
              >
                Save
              </Button>
              </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
