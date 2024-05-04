import { Container } from '@mui/material';

const ResumePage = () => {
  return (
    <Container>
      <iframe src={`${import.meta.env.VITE_SUPABASE_BUCKET_URL}/files/GeroResume.pdf#navpanes=0`} width="100%" height={800} />
    </Container>

  )
}

export default ResumePage
