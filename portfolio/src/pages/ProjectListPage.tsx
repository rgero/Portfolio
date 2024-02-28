import { Container } from '@mui/material';
import PageHeader from '../ui/PageHeader';
import ProjectList from '../components/projects/ProjectList';

const ProjectListPage = () => {

  return (
    <Container>
      <PageHeader>Project List</PageHeader>
      <ProjectList/>
    </Container>
  )
}

export default ProjectListPage