import React from "react";
import { FormControl, MenuItem, SelectChangeEvent, Select as SelectObject } from '@mui/material/';
import { Option } from "../interfaces/SelectOptions";

interface Props {
  options: Option[];
  value: string;
  onChange: (e: SelectChangeEvent) => void;
}

const Select: React.FC<Props> = ({ options, value, onChange }) => {
  return (
    <FormControl size="small" fullWidth>
      <SelectObject
        value={value}
        onChange={onChange}
        sx={{ width: "100%" }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </SelectObject>
    </FormControl>
  );
};

export default Select;