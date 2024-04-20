import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ExtraLifeParticipantResponse, useGetParticipant } from "./hooks/useGetParticipant";

import LinearProgress from '@mui/material/LinearProgress';
import Spinner from "../../ui/Spinner";

const ExtraLifeCard = () => {
  const {isLoading, participant, error, refetch}: ExtraLifeParticipantResponse = useGetParticipant();

  if (isLoading) return (<Spinner/>)

  const avatar = participant.avatarImageURL;
  const name = participant.displayName;
  const fundraisingGoal = participant.fundraisingGoal;
  const sumDonations = participant.sumDonations;

  const cardStyle = {
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    padding: 2,
    borderRadius: 2,
  }

  return (
    <Card sx={cardStyle}>
      <div style={{display: 'flex', justifyContent:'center'}}>
        <CardMedia
          component="img"
          sx={{width: 200, display: 'flex', justifyContent: 'center'}}
          image={avatar}
          alt={`Avatar for ${name}`}
        />
      </div>
      <CardContent>
        <Typography>{name}</Typography>
        <hr/>
        <Typography>${sumDonations} / ${fundraisingGoal}</Typography>
        <LinearProgress variant="determinate" value={sumDonations/fundraisingGoal*100} />
        <Typography sx={{paddingTop: "20px"}}>Member of ${participant.teamName}</Typography>
      </CardContent>
    </Card>
  )
}

export default ExtraLifeCard
