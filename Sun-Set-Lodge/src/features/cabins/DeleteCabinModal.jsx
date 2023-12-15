import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { HiTrash } from 'react-icons/hi2';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #edeff0',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

function DeleteModal({ deleteCabin }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Tooltip title="delete">
        <IconButton onClick={handleOpen}>
          <HiTrash fontSize="medium" />
        </IconButton>
      </Tooltip>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Delete cabin
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2, mb: 3 }}>
              Are you sure you want to delete this cabin permanently? This
              action cannot be undone.
            </Typography>
            <Stack spacing={2} direction="row" justifyContent="flex-end">
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" color="error" onClick={deleteCabin}>
                Delete
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default DeleteModal;
