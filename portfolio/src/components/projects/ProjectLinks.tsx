import { Box, Grid, List, ListItemButton, ListItemText, Typography } from "@mui/material"

import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import LanguageIcon from '@mui/icons-material/Language';
import { Project } from "../../interfaces/Project";

type ProjectLinksProps = {
  project: Project
}

const ProjectLinks = ({project}: ProjectLinksProps) => {
  return (
    <>
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
    </>
  )
}

export default ProjectLinks
