import { Option } from "../interfaces/SelectOptions";
import Select from "./Select"
import { SelectChangeEvent } from "@mui/material";
import { useSearchParams } from "react-router-dom"

interface Props {
  options: Option[]
}

const SortBy: React.FC<Props> = ({options}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || "name-asc";
  
  const handleChange = (e: SelectChangeEvent) => {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select options={options} onChange={handleChange} value={sortBy}/>
  )
}

export default SortBy
