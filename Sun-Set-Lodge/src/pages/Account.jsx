import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm';

function Account() {
  return (
    <Stack height="100vh">
      <Typography
        variant="h5"
        component="h1"
        width="60%"
        m="1.5rem"
        gutterBottom
      >
        Update your account
      </Typography>
      <UpdateUserDataForm />
      <UpdatePasswordForm/>
    </Stack>
  );
}

export default Account;
