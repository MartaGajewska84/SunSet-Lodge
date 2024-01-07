import { useState } from 'react';
import { Stack, Button, TextField, Paper } from '@mui/material';
import { FaCloudUploadAlt } from 'react-icons/fa';

import { useUser } from './useUser';
import { useUpdateUser } from './useUpdateUser';

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Paper elevation={1} sx={{ p: '3rem' }}>
        <Stack>
          <TextField
            id="email"
            label="Email address"
            value={email}
            variant="outlined"
            sx={{ m: 1, width: '35ch' }}
            disabled
          />
          <TextField
            id="fullName"
            label="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            variant="outlined"
            sx={{ m: 1, width: '35ch' }}
            disabled={isUpdating}
          />
          <input
            accept="image/*"
            defaultValue=""
            style={{ display: 'none' }}
            id="avatar"
            multiple
            type="file"
            onChange={(e) => setAvatar(e.target.files[0])}
            disabled={isUpdating}
          />
          <label htmlFor="avatar">
            <Button
              color="primary"
              variant="contained"
              component="span"
              startIcon={<FaCloudUploadAlt />}
              sx={{ mt: '1rem', ml: 1, mr: 1 }}
            >
              Upload your avatar
            </Button>
          </label>
          <Stack direction="row">
            <Button
              type="reset"
              sx={{ mt: '1rem', ml: 1, mr: 1 }}
              variant="contained"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              sx={{ mt: '1rem', ml: 1, mr: 1 }}
              variant="contained"
            >
              Update account
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </form>
  );
}

export default UpdateUserDataForm;
