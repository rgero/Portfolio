import { Container, Stack } from "@mui/material"

import { Media } from "../../interfaces/Media"
import MediaCard from "./MediaCard"

interface Props {
  list: Media[]
}

const MediaContainer: React.FC<Props> = ({list}) => {

  // I want this to be a dynamic list that contains two columns.
  return (
    <Container>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center" alignItems="center">
        {
          list.map((entry: Media, index: number) => {
            return (<MediaCard media={entry} key={index}/>)
          })
        }
      </Stack>
    </Container>
  )
}

export default MediaContainer
