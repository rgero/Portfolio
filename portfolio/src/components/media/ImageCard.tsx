import "../../styles/images.css"

import { Card, CardContent, Typography } from "@mui/material"

import { Media } from "../../interfaces/Media";
import ModalImage from "react-modal-image";

interface Props {
  media: Media
}

const ImageCard: React.FC<Props> = ({media}) => {
  return (
    <Card sx={{maxHeight: 500, minHeight: 300}}>
      <CardContent sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <ModalImage
          small={media.smallURL ? media.smallURL : media.url}
          large={media.url}
          alt={media.title}
          className="scaled-image"
        />
        <Typography>{media.description}</Typography>
      </CardContent>
    </Card>
)
}

export default ImageCard
