import { Box, Container, Grid, Typography } from "@mui/material"

import Markdown from "react-markdown";
import MediaContainer from "../media/MediaContainer"
import { Project } from "../../interfaces/Project"
import ProjectLinks from "./ProjectLinks";

interface Props {
  project: Project
}

const ProjectDescription: React.FC<Props> = ({project}) => {
  return (
    <Container>
      <Grid container justifyContent="space-between" spacing={2} wrap="wrap">
        <Grid item xs={12} md={(project.website || project.repo) ? 9 : 12}>
          <Markdown>{project.description}</Markdown>
        </Grid>
        <ProjectLinks project={project}/>
      </Grid>
      <hr/>
      {project.images.length > 0 && (
        <Box sx={{paddingBottom: "2rem"}}>
          <Typography variant="h4" sx={{paddingBottom: "1rem"}}>Media</Typography>
          <MediaContainer list={project.images}/>
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
