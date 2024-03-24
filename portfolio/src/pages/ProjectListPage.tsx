import { Container } from '@mui/material';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectList from '../components/projects/ProjectList';

const ProjectListPage = () => {
  return (
    <Container>
      <ProjectHeader/>
      <ProjectList/>
    </Container>
  )
}

export default ProjectListPage
