import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FaRegFaceSadTear } from 'react-icons/fa6';

function ErrorFallback({resetErrorBoundary}) {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper elevation={1} sx={{ width: '70%', p: '2rem' }}>
        <Stack alignItems="center" justifyContent="center" gap={3}>
          <FaRegFaceSadTear style={{ width: '2rem', height: '2rem' }} />
          <Typography variant="h4" component="h1" gutterBottom width="50%">
            Upps... something went wrong
          </Typography>
          <Button variant="contained" onClick={resetErrorBoundary}>Try again</Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default ErrorFallback;
