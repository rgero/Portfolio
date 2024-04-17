import { Card, CardActionArea, CardContent, CardMedia, Typography, useMediaQuery } from "@mui/material";

import { Media } from "../../interfaces/Media";
import React from "react";
import VideoModal from "../ui/VideoModal";
import { YouTubeParser } from "../../utils/YouTubeThumbnailParser";

interface Props {
  media: Media
}

const VideoCard: React.FC<Props> = ({media}) => {
  console.log(media);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const closeModal = () => setModalOpen(false);
  const onMobile = useMediaQuery('(max-width:600px)');
  const constructURL: string = YouTubeParser(media.url)

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
      <VideoModal isOpen={isModalOpen} closeModal={closeModal} media={media}/>
      {cardJSX}
    </>
  )
}

export default VideoCard
