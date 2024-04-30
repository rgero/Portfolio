import { Container, styled } from "@mui/material";

export const ContainerHeader = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    paddingBottom: "0rem",
  },
  [theme.breakpoints.down('md')]: {
    paddingBottom: "1rem",
  },
}));