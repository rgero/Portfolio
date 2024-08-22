import ImageContainer from "./ImageContainer";
import { Media } from "../../interfaces/Media";
import React from "react"
import VideoContainer from "./VideoContainer";

interface Props {
  list: Media[]
}

const MediaContainer: React.FC<Props> = ({list}) => {
  console.log(list);
  if (list[0].type !== "image") 
  {
    return <VideoContainer video={list[0]}/>
  } else {

    return <ImageContainer image={list[0]}/>
  }
}

export default MediaContainer
