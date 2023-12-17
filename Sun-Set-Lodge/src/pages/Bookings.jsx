import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BookingTable from '../features/bookings/BookingTable';
import BookingTableOperations from '../features/bookings/BookingTableOperations';

function Bookings() {
  return (
    <div>
      <Box display="flex" marginBottom="1.5rem">
        <Typography variant="h5" component="h1" width="60%"  gutterBottom>
          All Bookings
        </Typography>
        <Box width="100%" display="flex" justifyContent="flex-end">
          <BookingTableOperations />
        </Box>
      </Box>
      <BookingTable />
    </div>
  );
}

export default Bookings;
