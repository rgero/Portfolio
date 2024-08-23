import { Box, Dialog, DialogContent, DialogTitle, IconButton, useMediaQuery } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import { Media } from "../../interfaces/Media";
import React from "react";

interface ImageContainerProps {
  image: Media
}

const ImageContainer: React.FC<ImageContainerProps> = ({image}) => {
  const [open, setOpen] = React.useState(false);
  const matchesXS = useMediaQuery('(max-width:500px)');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <img
        src={image.src}
        alt={image.alt}
        style={{ cursor: 'pointer', width: '100px', height: '100px', objectFit: 'contain'}}
        onClick={handleOpen}
      />
      <Dialog open={open} onClose={handleClose} maxWidth={matchesXS ? "xs" : "sm"} fullWidth>
        <DialogTitle>
          {image.alt}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
        <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                height: '100vh',
                width: 'auto',
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ImageContainer;