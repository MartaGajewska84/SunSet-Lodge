import Spinner from '../../ui/Spinner';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import BookingDataBox from './BookingData';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from './useBooking';

function BookingDetail() {
  const { booking, isLoading } = useBooking();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;
  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: 'primary',
    'checked-in': 'success',
    'checked-out': 'info',
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        justifyItems = 'baseline'
      >
        <Stack direction="row" gap={4}>
          <Typography variant="h5" component="h1" width="60%" gutterBottom>
            Booking #{bookingId}
          </Typography>

          <Chip
            label={status.replace('-', ' ')}
            color={statusToTagName[status]}
          />
        </Stack>
        <Stack>
          <Button onClick={moveBack}>&larr; Back</Button>
        </Stack>
      </Stack>
      <BookingDataBox booking={booking} />

      <Stack>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </Stack>
    </>
  );
}

export default BookingDetail;
