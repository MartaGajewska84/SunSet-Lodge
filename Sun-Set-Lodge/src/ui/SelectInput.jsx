import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function SelectInput({ options, onChange, value }) {
  return (
    <Select value={value} onChange={onChange} sx={{height: "2.5rem"}}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}

export default SelectInput;