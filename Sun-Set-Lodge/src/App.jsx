import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { createTheme, ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { grey, green } from '@mui/material/colors';
import { HiOutlineSun } from 'react-icons/hi2';
import { HiOutlineMoon } from 'react-icons/hi2';

import AppLayout from './ui/AppLayout';
import Bookings from './pages/Bookings';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';
import Cabins from './pages/Cabins';
import Settings from './pages/Settings';
import Users from './pages/Users';
import Booking from './pages/Booking';
import Checkin from './pages/Checkin';
import Login from './pages/Login';
import Account from './pages/Account';
import ProtectedRoute from './ui/ProtectedRoute';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode);
  const theme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',

      info: {
        main: grey[400],
      },
      success: {
        main: green[200],
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <Paper elevation={0} square>
          <Stack direction="row" display="flex" justifyContent="flex-end">
            <IconButton
              sx={{ ml: 1, mt: '0.5rem', mr: '0.5rem' }}
              onClick={() => setMode((mode) => !mode)}
              color="inherit"
            >
              {theme.palette.mode === 'dark' ? (
                <HiOutlineSun />
              ) : (
                <HiOutlineMoon />
              )}
            </IconButton>
          </Stack>
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="bookings/:bookingId" element={<Booking />} />
                <Route path="checkin/:bookingId" element={<Checkin />} />
                <Route path="cabins" element={<Cabins />} />
                <Route path="users" element={<Users />} />
                <Route path="settings" element={<Settings />} />
                <Route path="account" element={<Account />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </Paper>
      </ThemeProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px',
            backgroundColor: 'white',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
