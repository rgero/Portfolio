import { Container } from '@mui/material';
import ProjectList from '../components/projects/ProjectList';
import ProjectPageHeader from '../components/projects/ProjectPageHeader';

const ProjectListPage = () => {
  return (
    <Container>
      <ProjectPageHeader/>
      <ProjectList/>
    </Container>
  )
}

export default ProjectListPage
