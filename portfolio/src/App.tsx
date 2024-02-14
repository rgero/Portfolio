import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header/>
      <ProjectList/>
    </ThemeProvider>
  )
}

export default App
