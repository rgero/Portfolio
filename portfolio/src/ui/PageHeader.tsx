import { Box, Typography } from "@mui/material"

const PageHeader = ({children} : {children: React.ReactNode}) => {
  return (
    <Box sx={{ paddingY: 2, width: '100%', maxWidth: 500 }}>
      <Typography variant='h3'>{children}</Typography>
    </Box>
  )
}

export default PageHeader
