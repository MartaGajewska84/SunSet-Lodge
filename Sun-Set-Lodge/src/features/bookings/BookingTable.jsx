import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useBookings } from './useBookings';

import SingleBookingRow from './SingleBookingRow';
import Spinner from '../../ui/Spinner';

function BookingTable() {
  const { bookings = [], isLoading } = useBookings();
  console.log(bookings);

  if (isLoading) return <Spinner />;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>CABIN</TableCell>
            <TableCell>GUEST</TableCell>
            <TableCell>DATES</TableCell>
            <TableCell>STATUS</TableCell>
            <TableCell>AMOUNT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <SingleBookingRow key={booking.id} booking={booking} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BookingTable;
