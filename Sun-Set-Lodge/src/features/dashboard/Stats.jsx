import Stack from '@mui/material/Stack';
import { blue } from '@mui/material/colors';
import Stat from './Stat';
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const fontStyles = { width: '1.5rem', height: '1.5rem', color: blue[300] };

  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkins = confirmedStays.length;

  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <Stack direction="row" gap={8} mt="2rem" justifyContent="center">
      <Stat
        title="Bookings"
        color="primary"
        icon={<HiOutlineBriefcase style={fontStyles} />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="primary"
        icon={<HiOutlineBanknotes style={fontStyles} />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="primary"
        icon={<HiOutlineCalendarDays style={fontStyles} />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="primary"
        icon={<HiOutlineChartBar style={fontStyles} />}
        value={Math.round(occupation * 100) + '%'}
      />
    </Stack>
  );
}

export default Stats;
