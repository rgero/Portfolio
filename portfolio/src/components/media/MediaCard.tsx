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
    <CardActionArea onClick={() => setModalOpen(true)} sx={{width: 300}}> 
      <Card sx={{maxHeight: 500, minHeight: 300}}>
          <CardMedia
            component="img"
            src={constructURL}
            height="200"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography>{media.description}</Typography>
          </CardContent>
      </Card>
    </CardActionArea>
  )

  if (onMobile && media.type=="video")
  {
    cardJSX = (
      <CardActionArea href={`https://www.youtube.com/watch?v=${media.url}`} sx={{width: 300}}> 
        <Card sx={{maxHeight: 500, minHeight: 300}}>
          <CardMedia
            component="img"
            src={constructURL}
            height="200"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography>{media.description}</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
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
