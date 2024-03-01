import { Box, Container, Typography } from "@mui/material"

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
      <Typography sx={{paddingBottom: "2rem"}}>{project.description}</Typography>
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
