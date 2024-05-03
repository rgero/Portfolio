import { Container } from '@mui/material';
import { Document, Page } from '@react-pdf/renderer';

const ResumePage = () => {
  const targetURL = import.meta.env.VITE_SUPABASE_BUCKET_URL + "files/GeroResume.pdf";
  return (
    <Container>
      <Document file={targetURL}/>
    </Container>
  )
}

export default ResumePage
