import { Box, Container, Typography } from "@mui/material"

import { Media } from "../../interfaces/Media"
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
        <Typography>
        {
          // This should be a Media Presentation component.
          project.media.map( (entry: Media, index: number) => {
            
            if (entry.type === "image")
            {
              return (<img src={entry.url} key={index}/>)
            } else if (entry.type === "video")
            {
              return <Typography>No Videos yet</Typography>
            }
            return entry.url;
          })
        }
</Typography>
      </Box>

      <Typography>Tags: {project.tags.join(", ")}</Typography>
    </Container>
  )
}

export default ProjectDescription
