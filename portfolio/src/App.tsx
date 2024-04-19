import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AboutPage from './pages/AboutPage';
import AppLayout from './ui/AppLayout';
import { DarkModeProvider } from './context/DarkModeContext';
import ProjectListPage from './pages/ProjectListPage';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const timeInSeconds = 15;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: timeInSeconds * 1000
    }
  }
})

const App = () => {

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
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
      </QueryClientProvider>
    </DarkModeProvider>
  )
}

export default App
