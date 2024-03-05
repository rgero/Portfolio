import { Container, Grid } from '@mui/material';

import PageHeader from '../ui/PageHeader';
import ProjectList from '../components/projects/ProjectList';
import SortBy from '../ui/SortBy';

const ProjectListPage = () => {

  return (
    <Container>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center" xs={{paddingBottom: "5rem"}}>
          <Grid item xs={12} md={9}>
            <PageHeader>Project List</PageHeader>
          </Grid>
          <Grid item xs={12} md={3}>
            <SortBy 
              options={[
                {value: "name-asc", label: "Sort By Name (A-Z)"},
                {value: "name-des", label: "Sort By Name (Z-A)"},
              ]}
            />
          </Grid>
        </Grid>
      </Container>
      <ProjectList/>
    </Container>
  )
}

export default ProjectListPage
