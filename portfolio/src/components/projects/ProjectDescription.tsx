import { Box, Container, Typography } from "@mui/material"

import { Media } from "../../interfaces/Media"
import MediaCard from "../media/MediaCard"
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
      <Typography>{project.description}</Typography>
      <Box>
        <Typography>Media</Typography>
        <MediaContainer list={project.media}/>
      </Box>

      <Typography>Tags: {project.tags.join(", ")}</Typography>
    </Container>
  )
}

export default ProjectDescription
