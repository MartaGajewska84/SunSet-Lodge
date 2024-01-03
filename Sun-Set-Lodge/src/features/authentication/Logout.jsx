import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <Tooltip title="log out">
      <IconButton color="primary" disabled={isLoading} onClick={logout}>
        <HiArrowRightOnRectangle />
      </IconButton>
    </Tooltip>
  );
}

export default Logout;
