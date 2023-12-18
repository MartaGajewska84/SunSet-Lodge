import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useBookings } from './useBookings';

import usePagination from '../../utils/usePagination';
import { PAGE_SIZE } from '../../utils/constants';

import SingleBookingRow from './SingleBookingRow';
import Spinner from '../../ui/Spinner';

function BookingTable() {
  let [page, setPage] = useState(1);
  const { bookings = [], isLoading } = useBookings();

  const count = Math.ceil(bookings.length / PAGE_SIZE);
  const _DATA = usePagination(bookings, PAGE_SIZE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <Stack spacing={4}>
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
              {_DATA.currentData().map((booking) => (
                <SingleBookingRow key={booking.id} booking={booking} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack alignItems="center">
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
            color="primary"
          />
        </Stack>
      </Stack>
    </>
  );
}

export default BookingTable;
