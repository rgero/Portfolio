import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import { Button, Container } from "@mui/material"
import { Captions, Fullscreen, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins"
import Lightbox, { Slide } from "yet-another-react-lightbox"

import { Image } from "../../interfaces/Image";
import React from "react"
import YouTube from "./PlugIns/YouTube";

interface Props {
  list: Image[]
}

const MediaContainer: React.FC<Props> = ({list}) => {
  const [advancedExampleOpen, setAdvancedExampleOpen] = React.useState(false);
  
  return (
    <Container>
      <Lightbox
        open={advancedExampleOpen}
        close={() => setAdvancedExampleOpen(false)}
        slides={list as Slide[]}
        plugins={[Captions, Fullscreen, Thumbnails, YouTube, Zoom]}
      />
      <Button variant="contained" onClick={() => setAdvancedExampleOpen(true)}>View Media</Button>
    </Container>
  )
}

export default MediaContainer
