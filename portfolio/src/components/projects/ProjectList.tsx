import { Container, Grid } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {AccordionSummaryProps} from '@mui/material/AccordionSummary';

import AccordionDetails from '@mui/material/AccordionDetails';
import { ProjectList as DummyProjects } from '../../data/dummyProject';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProjectDescription from './ProjectDescription';
import Spinner from '../../ui/Spinner';
import { styled } from '@mui/material/styles';
import { useGetProjects } from './hooks/useGetProjects';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const ProjectList = () => {
  const {projects, isLoading} = useGetProjects();

  if (isLoading) { return <Spinner/>}
  if (projects.length == 0) { return; }

  return (
    <Container>
      {projects.map( (entry, index) => (
        <Accordion
          slotProps={{ transition: { timeout: 600 } }}
        >
          <AccordionSummary
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Grid container justifyContent="space-between">
              <Grid item>
                {entry.name}
              </Grid>
              {entry.tags.length > 0 && (
                <Grid item>
                  Tags: {entry.tags.join(', ')}
                </Grid>
              )}

            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <ProjectDescription project={entry}/>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  )
}

export default ProjectList