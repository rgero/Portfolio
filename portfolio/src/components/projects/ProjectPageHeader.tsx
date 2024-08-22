import { ContainerHeader } from "../../ui/ContainerHeader"
import { Grid } from "@mui/material"
import PageHeader from "../../ui/PageHeader"
import SortBy from "../../ui/SortBy"

const ProjectPageHeader = () => {
  return (
    <ContainerHeader>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={6}>
          <PageHeader>Project List</PageHeader>
        </Grid>
        <Grid item xs={12} sm={5}>
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

export default ProjectPageHeader
