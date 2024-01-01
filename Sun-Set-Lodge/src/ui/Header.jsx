import Stack from '@mui/material/Stack';
import Logout from '../features/authentication/Logout';

function Header() {
  return (
    <>
      <Stack direction="row" justifyContent="flex-end">
        <Logout />
      </Stack>
    </>
  );
}

export default Header;
