import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/system/Stack';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={2}>
          <Sidebar />
        </Grid>
        <Stack xs={10}>
          <Header />
          <Outlet />
        </Stack>
      </Grid>
    </>
  );
}

export default AppLayout;
