import { useState, useEffect } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';

import Spinner from '../../ui/Spinner';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';


import SingleBookingData from '../bookings/SingleBookingData';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from '../bookings/useBooking';
import { useCheckin } from './useCheckin';
import { formatCurrency } from '../../utils/helpers';

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const { booking, isLoading } = useBooking();
  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckin();

  if (isLoading) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  function handleCheckin() {
    if (!confirmPaid) return;
    checkin(bookingId);
  }

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        justifyItems="baseline"
      >
        <Typography variant="h5" component="h1" width="70%" gutterBottom>
          Check in booking #{bookingId}
        </Typography>

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
      <Paper sx={{ padding: '1rem' }}>
        <Stack direction="row" gap={2} alignItems="center">
          <Checkbox
            checked={confirmPaid}
            onChange={() => setConfirmPaid((confirm) => !confirm)}
          />
          <Typography>
            I confirm that {guests.fullName} has paid the total amount of{' '}
            {formatCurrency(totalPrice)}
          </Typography>
        </Stack>
      </Paper>
      <Stack direction="row" gap={2}>
        <Button
          variant="contained"
          startIcon={<FaLongArrowAltLeft />}
          onClick={moveBack}
        >
          Back
        </Button>

        <Button
          variant="contained"
          onClick={handleCheckin}
          disabled={!confirmPaid}
        >
          Check in booking #{bookingId}
        </Button>
      </Stack>
    </>
  );
}

export default CheckinBooking;
