import { useSearchParams } from 'react-router-dom';
import SelectInput from './SelectInput';

function SortBy({ options }) {
  const [searchParams, setSerachParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    setSerachParams(searchParams);
  }
  return (
    <SelectInput
      options={options}
      onChange={handleChange}
      value={sortBy}
      
    />
  );
}

export default SortBy;
