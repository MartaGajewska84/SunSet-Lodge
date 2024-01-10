import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DashboardLayout from '../features/dashboard/DashboardLayout';
import DashboardFilter from '../features/dashboard/DashboardFilter';

function Dashboard({mode}) {
  return (
    <Box height="100%">
      <Stack direction="row" marginBottom="1.5rem">
        <Typography variant="h5" component="h1" >
          Dashboard
        </Typography>
        <Box width="100%" display="flex" justifyContent="flex-end">
          <DashboardFilter />
        </Box>
      </Stack>
      <DashboardLayout mode={mode} />
    </Box>
  );
}



export default Dashboard;
