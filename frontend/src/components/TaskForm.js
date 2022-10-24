import { Grid, Card, Typography, CardContent, TextField, Button } from "@mui/material";

export default function TaskForm() {
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
            padding: "1rem",
          }}
        >
          <Typography>Create Task</Typography>
          <CardContent>
            <form>
              <TextField
                variant="filled"
                label="Write your Title"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
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
