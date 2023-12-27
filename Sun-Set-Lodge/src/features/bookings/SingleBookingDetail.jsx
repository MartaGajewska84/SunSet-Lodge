import Spinner from '../../ui/Spinner';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import SingleBookingData from './SingleBookingData';
import DeleteModal from '../../ui/DeleteModal';

import { useNavigate } from 'react-router';
import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from './useBooking';
import { useCheckout } from '../check-in-out/useCheckOut';
import { useDeleteBooking } from './useDeleteBooking';

function SingleBookingDetail() {
  const { booking, isLoading } = useBooking();
  const { deleteBooking } = useDeleteBooking();

  const navigate = useNavigate();

  const moveBack = useMoveBack();

  const { checkout } = useCheckout();

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
        justifyItems="baseline"
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
          <Button
            variant="outlined"
            startIcon={<FaLongArrowAltLeft />}
            onClick={moveBack}
          >
            Back
          </Button>
        </Stack>
      </Stack>
      <SingleBookingData booking={booking} />

      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" gap={2}>
          <Button
            variant="contained"
            startIcon={<FaLongArrowAltLeft />}
            onClick={moveBack}
          >
            Back
          </Button>
          {status === 'unconfirmed' && (
            <Button
              variant="contained"
              onClick={() => navigate(`/checkin/${bookingId}`)}
            >
              Check in
            </Button>
          )}
          {status === 'checked-in' && (
            <Button variant="contained" onClick={() => checkout(bookingId)}>
              Check out
            </Button>
          )}
        </Stack>
        {/* delete button */}
        <DeleteModal
          deleteFunction={() =>
            deleteBooking(bookingId, {
              onSettled: () => navigate(-1),
            })
          }
          name="booking"
        />
      </Stack>
    </>
  );
}

export default SingleBookingDetail;
