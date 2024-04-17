import ImageCard from "./ImageCard";
import { Media } from "../../interfaces/Media"
import React from "react";
import VideoCard from "./VideoCard";

interface Props {
  media: Media
}

// I feel like having the "click" option open a modal might be better.
const MediaCard: React.FC<Props> = ({media}) => {
  console.log(media);
  if (media.type === "image")
  {
    return <ImageCard media={media} />
  } else {
    return <VideoCard media={media} />
  }
}

export default MediaCard
