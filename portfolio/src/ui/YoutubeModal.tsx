import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import React from "react";

interface YouTubeModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  videoId: string;
  videoType?: string,
}

const YouTubeModal: React.FC<YouTubeModalProps> = ({ open, onClose, title, videoId, videoType }) => {
  const embedUrl = videoType === "playlist"
    ? `https://www.youtube.com/embed/videoseries?list=${videoId}`
    : `https://www.youtube.com/embed/${videoId}`;

    if (!title) { title = "Youtube Video"; }

    return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        YouTube Video
        <IconButton
          aria-label="close"
          onClick={onClose}
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
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default YouTubeModal;