import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography>
              <Link to="/">PERN Stack</Link>
            </Typography>
            <Button variant="contained" color="primary">
              New Task
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
