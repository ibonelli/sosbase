import { Grid, Card, Typography, CardContent, TextField, Button } from "@mui/material";

export default function TaskForm() {
  const handleSubmit = event => {
    event.preventDefault();

    console.log("submit");
  }

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
