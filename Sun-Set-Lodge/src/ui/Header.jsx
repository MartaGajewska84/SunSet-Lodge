import { useNavigate } from 'react-router';
import { HiOutlineUser } from 'react-icons/hi2';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';

import UserAvatar from '../features/authentication/UserAvatar';

import Logout from '../features/authentication/Logout';

function Header() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      color="transparent"
      style={{ marginBottom: '1rem', boxShadow: '0px 0px 0px 0px' }}
    >
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="flex-end"
          width="100%"
          gap="0.5rem"
        >
          <UserAvatar />
          <Tooltip title="your account">
            <IconButton color="primary" onClick={() => navigate('/account')}>
              <HiOutlineUser />
            </IconButton>
          </Tooltip>

          <Logout />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
