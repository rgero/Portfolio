import { Grid } from "@mui/material";
import ImageContainer from "./ImageContainer";
import { Media } from "../../interfaces/Media";
import React from "react"
import VideoContainer from "./VideoContainer";

interface Props {
  list: Media[]
}

const MediaContainer: React.FC<Props> = ({list}) => {
  if (list.length === 0)
  {
    return null
  }

  return (
    <Grid container direction="row" spacing={2}>
      { 
        list.map((media, index) => {
          return (
            <Grid key={index} item>
              {media.type !== "image" ? <VideoContainer key={index} video={media}/> : <ImageContainer key={index} image={media}/>}
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default MediaContainer
