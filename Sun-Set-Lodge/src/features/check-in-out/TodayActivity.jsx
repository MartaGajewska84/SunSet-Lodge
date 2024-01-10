import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useTodayActivity } from './useTodayActivity';
import TodayItem from './TodayItem';
import Spinner from '../../ui/Spinner';

function Today() {
  const {activities, isLoading} = useTodayActivity()
  return (
    <Paper elevation={1} sx={{ p: '1rem', height: "100%" }}>
      <Typography variant="h5" component="h2" mb="1rem" p="1rem">
        Today
      </Typography>
      {!isLoading ? (
        activities?.length > 0 ? (
          <Stack gap={2}>
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </Stack>
        ) : (
          <Typography>No activity today...</Typography>
        )
      ) : (
        <Spinner />
      )}
    </Paper>
  );
}

export default Today;
