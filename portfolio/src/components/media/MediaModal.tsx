import { Container, Grid, Modal, Typography } from "@mui/material";

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { Media } from "../../interfaces/Media"
import YouTube from "react-youtube";

interface Props {
  isOpen: boolean,
  closeModal: () => void,
  media: Media
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: "75%",
  maxHeight: "75%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};


const MediaModal: React.FC<Props> = ({isOpen, closeModal, media}) => {
  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container sx={style}>
        <Grid container direction="column" alignItems="center" justifyContent="center">
          <Grid item>
            <Typography id="modal-modal-title" variant="h4" component="h2" sx={{paddingBottom: "0.2em"}}>
              {media.title}
            </Typography>
          </Grid>
          <Grid item>
            { media.type == "image" ? (
              <img src={media.url} width="100%" height="100%"/>
            ) : (
              <YouTube videoId={media.url}/>
            )}
          </Grid>
        </Grid>
      </Container>
    </Modal>
  )
}

export default MediaModal
