import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/system/Stack';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid xs="auto" item="true">
          <Sidebar />
        </Grid>
        <Grid xs={10} item="true">
          <Stack spacing={3}>
            <Header />
            <Outlet />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default AppLayout;
