import { Box, Container, Grid, List, ListItemButton, ListItemText, Typography } from "@mui/material"

import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import LanguageIcon from '@mui/icons-material/Language';
import MediaContainer from "../media/MediaContainer"
import { Project } from "../../interfaces/Project"

interface Props {
  project: Project
}

const ProjectDescription: React.FC<Props> = ({project}) => {
  return (
    <Container>
      <Typography variant="h5" component="h5">{project.name}</Typography>
      <hr/>
      <Grid container justifyContent="space-between" spacing={2} wrap="wrap">
        <Grid item xs={12} md={(project.website || project.repo) ? 9 : 12}>
          <Typography sx={{paddingBottom: "2rem", whiteSpace: "pre-line"}}>{project.description}</Typography>
        </Grid>

        {(project.website || project.repo) && (
          <Grid item xs={12} md={3}>
            <Box sx={{ p: 2, border: '1px solid grey', borderRadius: 2}}>
              <Typography variant="h6" component="h6">Links</Typography>
              <List dense={true}>
                { project.repo && (
                  <ListItemButton component="a" href={project.repo}>
                    <FolderCopyIcon sx={{marginRight: 1}}/>
                    <ListItemText primary="Repository" />
                  </ListItemButton>
                )}
                { project.website && (
                  <ListItemButton component="a" href={project.website}>
                    <LanguageIcon sx={{marginRight: 1}}/>
                    <ListItemText primary="Website" />
                  </ListItemButton>
                )}
              </List>
            </Box>  
          </Grid>
        )}
      </Grid>
      <hr/>
      {project.media.length > 0 && (
        <Box sx={{paddingBottom: "2rem"}}>
          <Typography variant="h4">Media</Typography>
          <MediaContainer list={project.media}/>
        </Box>
      )}

      {project.tags.length > 0 ? 
        (
          <Typography>Tags: {project.tags.join(", ")}</Typography>
        ) : (
          <Typography>No Tags Defined</Typography>
        )
      }

    </Container>
  )
}

export default ProjectDescription
