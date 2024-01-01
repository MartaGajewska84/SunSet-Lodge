import IconButton from '@mui/material/IconButton';
import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';

function Logout() {
  const {logout, isLoading} = useLogout()

  return (
    <IconButton color="primary" disabled={isLoading} onClick={logout}>
      <HiArrowRightOnRectangle />
    </IconButton>
  );
}

export default Logout
