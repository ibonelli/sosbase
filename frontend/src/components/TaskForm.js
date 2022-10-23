import { Grid, Card, Typography } from "@mui/material";

export default function TaskForm() {
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card>
          <Typography>Create Task</Typography>
        </Card>
      </Grid>
    </Grid>
  )
}
