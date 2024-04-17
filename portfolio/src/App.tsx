import 'bootstrap/dist/css/bootstrap.min.css';
import "yet-another-react-lightbox/styles.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import AppLayout from './ui/AppLayout';
import { DarkModeProvider } from './context/DarkModeContext';
import ProjectListPage from './pages/ProjectListPage';

const App = () => {

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={
            <AppLayout/>
          }>
            <Route index element={<ProjectListPage/>}/>
            <Route path="/projects" element={<ProjectListPage/>}/>
            <Route path='/about' element={<AboutPage/>} />
            <Route path="/resume" element={<ProjectListPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </DarkModeProvider>
  )
}

export default App
