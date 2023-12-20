import { format, isToday } from 'date-fns';
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from 'react-icons/hi2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { blue } from '@mui/material/colors';

import { formatDistanceFromNow, formatCurrency } from '../../utils/helpers';

function SingleBookingData({ booking }) {
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

  const fontStyles = { width: '1.5rem', height: '1.5rem', color: blue[300] };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" pb="1.5rem">
          <Stack direction="row" gap={2}>
            <HiOutlineHomeModern style={fontStyles} />
            <Typography>
              {numNights} nights in Cabin <span>{cabinName}</span>
            </Typography>
          </Stack>

          <Typography>
            {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
            {isToday(new Date(startDate))
              ? 'Today'
              : formatDistanceFromNow(startDate)}
            ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
          </Typography>
        </Stack>
        <Divider variant="middle" />
        <Stack direction="row" gap={2} pb="1.5rem" pt="1.5rem">
          <Typography>
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
          </Typography>
          <span>&bull;</span>
          <Typography>{email}</Typography>
          <span>&bull;</span>
          <Typography>National ID {nationalID}</Typography>
        </Stack>

        {observations && (
          <>
            <Divider variant="middle" />
            <Stack direction="row" gap={2} pb="1.5rem" pt="1.5rem">
              <HiOutlineChatBubbleBottomCenterText style={fontStyles} />
              <Typography>{observations}</Typography>
            </Stack>
          </>
        )}
        <Divider variant="middle" />
        <Stack direction="row" gap={2} pb="1.5rem" pt="1.5rem">
          <Stack justifyContent="center" alignItems="center">
            <HiOutlineCheckCircle style={fontStyles} />
          </Stack>
          <Typography>Breakfast included?</Typography>
          {hasBreakfast ? (
            <Typography>Yes</Typography>
          ) : (
            <Typography>No</Typography>
          )}
        </Stack>
        <Divider variant="middle" />
        <Stack direction="row" gap={2} pb="1.5rem" pt="1.5rem">
          <Stack justifyContent="center">
            <HiOutlineCurrencyDollar style={fontStyles} />
          </Stack>
          <Paper
            sx={{
              backgroundColor: isPaid ? 'success.main' : 'error.light',
              width: '100%',
              paddingRight: "1rem",
              paddingLeft: "1rem",
            }}
          >
            <Stack direction="row" justifyContent="space-between" p="0.5rem">
              <Stack direction="row" gap={2}>
                <Typography>{formatCurrency(totalPrice)}</Typography>

                {hasBreakfast && (
                  <Typography>
                    {' '}
                    (${formatCurrency(cabinPrice)} cabin + $
                    {formatCurrency(extrasPrice)} breakfast)
                  </Typography>
                )}
              </Stack>

              <Stack>
                <Typography>
                  {isPaid ? 'Paid' : 'Will pay at property'}
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        </Stack>
        <Divider variant="middle" />
        <Stack pt="1.5rem">
          <Typography>
            Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default SingleBookingData;
