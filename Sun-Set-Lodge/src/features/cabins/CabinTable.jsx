import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import SingleCabinRow from './SingleCabinRow';
import Spinner from '../../ui/Spinner';
import { useSearchParams } from 'react-router-dom';


import { useCabins } from './useCabins';

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();
  
  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get('discount') || 'all';
  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  return (
    
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>CABIN</TableCell>
              <TableCell>CAPACITY</TableCell>
              <TableCell>PRICE</TableCell>
              <TableCell>DISCOUNT</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCabins.map((cabin) => (
              <SingleCabinRow key={cabin.id} cabin={cabin} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    
  );
}

export default CabinTable;
