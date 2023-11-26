import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import SingleCabinRow from './SingleCabinRow';
import Spinner from '../../ui/Spinner';

import { useCabins } from './useCabins';

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  console.log(cabins);
  if(isLoading) return <Spinner/>

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
          {cabins.map((cabin) => (
            <SingleCabinRow key={cabin.id} cabin={cabin} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CabinTable;
