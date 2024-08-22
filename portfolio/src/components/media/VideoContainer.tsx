import { Button, Container } from "@mui/material";

import { Media } from "../../interfaces/Media";
import YouTubeModal from "../../ui/YoutubeModal";
import { useState } from "react";

const VideoContainer = ({video}: {video: Media}) => {
  const [advancedExampleOpen, setAdvancedExampleOpen] = useState(false);

  const handleClose = () => {
    setAdvancedExampleOpen(false);
  };

  return (
    <Container>
      <Button variant="contained" onClick={()=> setAdvancedExampleOpen(true)}>View Media</Button>
      <YouTubeModal open={advancedExampleOpen} onClose={handleClose} title={video.title} videoId={video.src} videoType={video.type} />
    </Container>
  )
}

export default VideoContainer
