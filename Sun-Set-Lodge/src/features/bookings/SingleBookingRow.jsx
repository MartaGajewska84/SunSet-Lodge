import { format, isToday } from 'date-fns';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { formatCurrency } from '../../utils/helpers';
import { formatDistanceFromNow } from '../../utils/helpers';

function SingleBookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const statusToTagName = {
    unconfirmed: 'primary',
    'checked-in': 'success',
    'checked-out': 'info',
  };

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>{cabinName}</TableCell>

      <TableCell>
        <Stack>
          <span>{guestName}</span>
          <span>{email}</span>
        </Stack>
      </TableCell>

      <TableCell>
        <Stack>
          <span>
            {isToday(new Date(startDate))
              ? 'Today'
              : formatDistanceFromNow(startDate)}{' '}
            &rarr; {numNights} night stay
          </span>
          <span>
            {format(new Date(startDate), 'MMM dd yyyy')} &mdash;{' '}
            {format(new Date(endDate), 'MMM dd yyyy')}
          </span>
        </Stack>
      </TableCell>
      <TableCell>
        <Chip label={status.replace('-', ' ')} color={statusToTagName[status]}/>
      </TableCell>

      <TableCell>{formatCurrency(totalPrice)}</TableCell>
    </TableRow>
  );
}

export default SingleBookingRow;
