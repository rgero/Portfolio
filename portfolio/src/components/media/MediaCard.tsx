import { Card, CardActionArea, CardContent, CardMedia, Typography, useMediaQuery } from "@mui/material"

import { Media } from "../../interfaces/Media"
import MediaModal from "./MediaModal";
import React from "react";
import { YouTubeParser } from "../../utils/YouTubeThumbnailParser";

interface Props {
  media: Media
}

// I feel like having the "click" option open a modal might be better.
const MediaCard: React.FC<Props> = ({media}) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const closeModal = () => setModalOpen(false);

  const constructURL: string = media.type === "image" ? media.url : YouTubeParser(media.url)

  const onMobile = useMediaQuery('(max-width:600px)');

  // This feels like a hack.
  let cardJSX = (
    <Card sx={{width: 300, maxHeight: 500, minHeight: 300}}>
      <CardActionArea onClick={() => setModalOpen(true)}> 
        <CardMedia
          component="img"
          src={constructURL}
          height="200"
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent>
          <Typography>{media.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )

  if (onMobile && media.type=="video")
  {
    cardJSX = (
      <Card sx={{width: 300, maxHeight: 500, minHeight: 300}}>
        <CardActionArea href={`https://www.youtube.com/watch?v=${media.url}`}> 
          <CardMedia
            component="img"
            src={constructURL}
            height="200"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography>{media.description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }

  return (
    <>
      <MediaModal isOpen={isModalOpen} closeModal={closeModal} media={media}/>
      {cardJSX}
    </>

  )
}

export default MediaCard
