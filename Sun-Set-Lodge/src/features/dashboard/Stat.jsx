import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Stat({ icon, title, value }) {
  return (
    <Paper elevation={1}>
      <Stack direction="row" gap={2} p="1rem" pl="1.5rem" pr="1.5rem">
        {icon}
        <Typography>{title}</Typography>
        <Typography>{value}</Typography>
      </Stack>
    </Paper>
  );
}

export default Stat;
