import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UpdateSettingsForm from '../features/settings/updateSettingsForm';

function Settings() {
  return (
    <>
      <Box height="100vh">
        <Typography variant="h5" component="h1" sx={{mb: "2rem"}}>
          Update the settings
        </Typography>
        <UpdateSettingsForm />
      </Box>
    </>
  );
}

export default Settings;
