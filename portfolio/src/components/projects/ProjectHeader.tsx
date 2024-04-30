import { ContainerHeader } from "../../ui/ContainerHeader"
import { Grid } from "@mui/material"
import PageHeader from "../../ui/PageHeader"
import SortBy from "../../ui/SortBy"

const ProjectHeader = () => {
  return (
    <ContainerHeader>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} md={9}>
          <PageHeader>Project List</PageHeader>
        </Grid>
        <Grid item xs={12} md={3}>
          <SortBy 
            options={[
              {value: "name-asc", label: "Sort By Name (A-Z)"},
              {value: "name-des", label: "Sort By Name (Z-A)"},
            ]}
          />
        </Grid>
      </Grid>
    </ContainerHeader>
  )
}

export default ProjectHeader
