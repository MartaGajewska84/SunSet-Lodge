import { useSearchParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <Box display="flex"  gap={2}>
      {options.map((option) => (
        <Button
          key={option.value}
          variant={option.value === currentFilter ? 'contained' : 'outlined'}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </Box>
  );
}

export default Filter;
