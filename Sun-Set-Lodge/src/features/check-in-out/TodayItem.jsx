import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import CheckoutButton from './CheckoutButton';

function TodayItem({ activity }) {
  const navigate = useNavigate();

  const { id, status, guests, numNights } = activity;

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        {status === 'unconfirmed' && (
          <Chip
            color="primary"
            label="Arriving"
            size="small"
            sx={{ width: '5rem' }}
          />
        )}
        {status === 'checked-in' && (
          <Chip
            color="secondary"
            label="Departing"
            size="small"
            sx={{ width: '5rem' }}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        <Typography>{guests.fullName}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{numNights} nights</Typography>
      </Grid>
      <Grid item xs={3}>
        {status === 'unconfirmed' && (
          <Button
            variant="outlined"
            onClick={() => navigate(`/checkin/${id}`)}
            sx={{ height: '2rem', width: '8rem' }}
          >
            Check in
          </Button>
        )}
        {status === 'checked-in' && <CheckoutButton bookingId={id} />}
      </Grid>
    </Grid>
  );
}

export default TodayItem;
