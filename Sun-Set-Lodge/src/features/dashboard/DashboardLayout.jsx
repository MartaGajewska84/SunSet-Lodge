import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { useRecentBookings } from './useRecentBookings';
import Spinner from '../../ui/Spinner';
import { useRecentStays } from './useRecentStays';
import Stats from './Stats';
import { useCabins } from '../cabins/useCabins';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';
import TodayActivity from '../check-in-out/TodayActivity'

function DashboardLayout({mode}) {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const {
    confirmedStays,
    isLoading: isLoading2,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;
  
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stats
              bookings={bookings}
              confirmedStays={confirmedStays}
              numDays={numDays}
              cabinCount={cabins.length}
            />
          </Grid>
          <Grid item xs={6}>
            <TodayActivity/>
          </Grid>
          <Grid item xs={6}>
            <DurationChart mode={mode} confirmedStays={confirmedStays} />
          </Grid>
          <Grid item xs={12}>
            <SalesChart mode={mode} bookings={bookings} numDays={numDays} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DashboardLayout;
