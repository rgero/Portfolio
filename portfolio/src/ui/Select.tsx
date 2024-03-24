import {FormControl, MenuItem, SelectChangeEvent, Select as SelectObject} from '@mui/material/';

import { Option } from "../interfaces/SelectOptions"
import React from "react"

interface Props {
  options: Option[]
  value: string
  onChange: (e: SelectChangeEvent) => void
}

const Select: React.FC<Props> = ({options, value, onChange}) => {
  return (
    <FormControl size="small" fullWidth>
      <SelectObject
        value={value}
        onChange={onChange}
        sx={{width: "100%"}}
      >
        {options.map(option => 
          {
            return (<MenuItem value={option.value}>{option.label}</MenuItem>)
          })
        }
      </SelectObject>
    </FormControl>
  )
}

export default Select
