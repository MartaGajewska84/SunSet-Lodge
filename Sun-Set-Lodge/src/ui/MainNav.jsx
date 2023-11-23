import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from 'react-icons/hi2';

const fontStyles = { width: '2rem', height: '2rem' };

const data = [
  {
    icon: <HiOutlineHome style={fontStyles} />,
    label: 'Home',
    to: '/dashboard',
  },
  {
    icon: <HiOutlineCalendarDays style={fontStyles} />,
    label: 'Bookings',
    to: '/bookings',
  },
  {
    icon: <HiOutlineHomeModern style={fontStyles} />,
    label: 'Cabins',
    to: '/cabins',
  },
  { icon: <HiOutlineUsers style={fontStyles} />, label: 'Users', to: '/users' },
  {
    icon: <HiOutlineCog6Tooth style={fontStyles} />,
    label: 'Settings',
    to: '/settings',
  },
];

function MainNav() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 200,
        bgcolor: 'background.paper',
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          {data.map((item) => (
            <Link key={item.label} href={item.to} underline="none">
              <ListItem>
                <ListItemButton sx={{ borderRadius: '5px', width: '100%' }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </nav>
    </Box>
  );
}

export default MainNav;
