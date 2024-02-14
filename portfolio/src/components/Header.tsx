import { AppBar, Container, Toolbar, Typography } from "@mui/material"

import AdbIcon from '@mui/icons-material/Adb';

const Header = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              PORTFOLIO
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
