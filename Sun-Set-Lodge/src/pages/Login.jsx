import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';

function Login() {
  return (
    <Stack direction="column" alignItems="center">
      <Logo />
      <Typography variant="h6" m="1.5rem">
        Log in to your account
      </Typography>
      <LoginForm />
    </Stack>
  );
}

export default Login;
