import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useUser } from './useUser';

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  return (
    <Stack direction="row" alignItems="center" gap="1rem">
      <Avatar alt={fullName} src={avatar || 'default-user.jpg'} />
      <Typography>{fullName}</Typography>
    </Stack>
  );
}

export default UserAvatar;
