import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Typography, styled } from "@mui/material"

interface Props {
  current: number,
  target: number
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 22,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
  },
}));

const ProgressText = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === 'light' ? theme.palette.primary.contrastText : theme.palette.primary.contrastText,
  fontWeight: "bold"
}));

const ProgressBar: React.FC<Props> = ({current, target}) => {

  const percentageComplete = 100 * (current / target);
  const percentageString = `${Math.round(percentageComplete)}%`

  return (
    <div style={{ position: "relative" }}>
      <BorderLinearProgress
        variant="determinate"
        value={percentageComplete}
      />
      <ProgressText
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          transform: "translateX(-50%)",
        }}
      >
        {percentageString}
      </ProgressText>
      <ProgressText
        style={{
          position: "absolute",
          top: 0,
          left: "85%",
          transform: "translateX(-50%)",
        }}
      >
        ${target}
      </ProgressText>
    </div>
  )
}

export default ProgressBar
