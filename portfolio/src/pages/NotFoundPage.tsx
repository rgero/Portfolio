import { Button, Container, Grid, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Grid container direction="column" spacing={5}>
        <Grid item>
          <Typography variant="h2">Page not found</Typography>
        </Grid>
        <Grid item>
          <Typography>The page you are looking for has not been found</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" size="small" color="info" onClick={() => navigate("/")}>Click here to go the home page</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default NotFoundPage
