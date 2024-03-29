import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';

function PageNotFound() {
  const navigate = useNavigate();
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
          <Typography variant="h4" component="h1" gutterBottom>
            Page not found
          </Typography>
          <Button variant="contained" onClick={() => navigate('/')}>
            Try again
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default PageNotFound;
