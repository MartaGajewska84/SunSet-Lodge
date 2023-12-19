import { format, isToday } from 'date-fns';
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from 'react-icons/hi2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { formatDistanceFromNow, formatCurrency } from '../../utils/helpers';

function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack>
          <div>
            <HiOutlineHomeModern />
            <Typography>
              {numNights} nights in Cabin <span>{cabinName}</span>
            </Typography>
          </div>

          <Typography>
            {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
            {isToday(new Date(startDate))
              ? 'Today'
              : formatDistanceFromNow(startDate)}
            ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
          </Typography>
        </Stack>

        <Stack>
          <Stack>
            <Typography>
              {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
            </Typography>
            <span>&bull;</span>
            <Typography>{email}</Typography>
            <span>&bull;</span>
            <Typography>National ID {nationalID}</Typography>
          </Stack>

          {observations && (
            <Stack>
              <HiOutlineChatBubbleBottomCenterText />
              {observations}
            </Stack>
          )}

          <Stack>
            <HiOutlineCheckCircle />
            <Typography>Breakfast included?</Typography>
            {hasBreakfast ? 'Yes' : 'No'}
          </Stack>

          <Box sx={{ backgroundColor: isPaid ? 'success.main' : 'error.main' }}>
            <Stack>
              <HiOutlineCurrencyDollar />
              {formatCurrency(totalPrice)}

              {hasBreakfast &&
                ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                  extrasPrice
                )} breakfast)`}
            </Stack>

            <Typography>{isPaid ? 'Paid' : 'Will pay at property'}</Typography>
          </Box>
        </Stack>

        <Stack>
          <Typography>
            Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default BookingDataBox;
