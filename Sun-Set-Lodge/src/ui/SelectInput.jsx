import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function SelectInput({ options, onChange, value }) {
  return (
    <>
      <FormControl size="small" sx={{ minWidth: 100 }}>
        <InputLabel id="sort-by">Sort by</InputLabel>
        <Select
          labelId="sort-by"
          value={value}
          onChange={onChange}
          sx={{ height: '2.5rem' }}
          label="Sort by"
          autoWidth
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default SelectInput;
