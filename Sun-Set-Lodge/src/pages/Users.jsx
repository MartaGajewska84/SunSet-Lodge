import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SignupForm from '../features/authentication/SignupForm';

function Users() {
  return (
    <Stack direction="column" alignItems="center">
      <Typography variant="h5" mb="1.5rem">
        Create a new user
      </Typography>
      <Stack width="50%">
        <SignupForm />
      </Stack>
    </Stack>
  );
}

export default Users;
