import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

import { Media } from "../../interfaces/Media"

interface Props {
  media: Media
}

// I feel like having the "click" option open a modal might be better.
const MediaCard: React.FC<Props> = ({media}) => {
  return (
    <Card sx={{width: 300, maxHeight: 500, minHeight: 300}}>
      <CardActionArea href={media.type == "image" ? media.url : ""}> 
        <CardMedia
          component={media.type == "image" ? "img" : "iframe"}
          src={media.url}
          height="196"
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
      </CardActionArea>

      <CardContent>
        <Typography>{media.description}</Typography>
      </CardContent>
    </Card>
  )
}

export default MediaCard
