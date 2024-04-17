import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import { Button, Container } from "@mui/material"
import { Captions, Fullscreen, Thumbnails, Video, Zoom } from "yet-another-react-lightbox/plugins"
import Lightbox, { Slide } from "yet-another-react-lightbox"

import { Media } from "../../interfaces/Media"
import React from "react"
import YouTube from "./PlugIns/YouTube";

interface Props {
  list: Media[]
}

const MediaContainer: React.FC<Props> = ({list}) => {
  const [advancedExampleOpen, setAdvancedExampleOpen] = React.useState(false);

  // I want this to be a dynamic list that contains two columns.
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
