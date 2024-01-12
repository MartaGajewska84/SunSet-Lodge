import { useForm, Controller } from 'react-hook-form';
import {
  Stack,
  Button,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { HiXMark } from 'react-icons/hi2';
import { FaCloudUploadAlt } from 'react-icons/fa';

import { useCreateCabin } from './useCreateCabin';
import { useEditCabin } from './useEditCabin';

function CabinForm({ close, cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;

  const { createCabin } = useCreateCabin();
  const { editCabin } = useEditCabin();

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, control, formState } =
    useForm({
      defaultValues: isEditSession ? editValues : {},
    });

  const { errors } = formState;
  const fileUploadError = errors.image;

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            close();
          },
        }
      );
    else
      createCabin(
        { ...data, image: data.image },
        {
          onSuccess: () => {
            reset();
            close();
          },
        }
      );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Box display="flex" justifyContent="flex-end">
        <IconButton onClick={close}>
          <HiXMark style={{ width: '1.5rem', height: '1.5rem' }} />
        </IconButton>
      </Box>
      <Box sx={{ width: '75%' }}>
        <Stack spacing={2}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                defaultValue=""
                id="name"
                label="Cabin name"
                variant="outlined"
                {...register('name', {
                  required: 'Please enter cabin name',
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
            name="name"
            control={control}
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.maxCapacity}
                helperText={errors.maxCapacity?.message}
                defaultValue={1}
                id="maxCapacity"
                label="Maximum capacity"
                type="number"
                variant="outlined"
                {...register('maxCapacity', {
                  required: 'This field is required',
                  min: {
                    value: 1,
                    message: 'Capacity should be at least 1',
                  },
                })}
              />
            )}
            name="maxCapacity"
            control={control}
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.regularPrice}
                helperText={errors.regularPrice?.message}
                defaultValue={1}
                id="regularPrice"
                label="Regular price"
                type="number"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                {...register('regularPrice', {
                  required: 'This field is required',
                  min: {
                    value: 1,
                    message: 'Price should be at least 1',
                  },
                })}
              />
            )}
            name="regularPrice"
            control={control}
          />

          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.discount}
                helperText={errors.discount?.message}
                defaultValue={0}
                id="discount"
                label="Discount"
                type="number"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                {...register('discount', {
                  required: 'This field is required',
                  validate: (value) =>
                    Number(value) <= Number(getValues().regularPrice) ||
                    'Discount should be less than the regular price',
                })}
              />
            )}
            name="discount"
            control={control}
          />

          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.description}
                helperText={errors.description?.message}
                defaultValue=""
                id="description"
                label="Description"
                multiline
                maxRows={4}
                variant="outlined"
                {...register('description', {
                  required: 'This field is required',
                })}
              />
            )}
            name="description"
            control={control}
          />
        </Stack>
      </Box>

      <Box display="flex" justifyContent="space-between" mt="3rem">
        <Box>
          <input
            accept="image/*"
            defaultValue=""
            style={{ display: 'none' }}
            id="image"
            multiple
            type="file"
            {...register('image', {
              required: isEditSession ? false : 'This field is required',
            })}
          />
          <label htmlFor="image">
            {fileUploadError ? (
              <Button color="error" variant="contained" component="span">
                Upload cabin photo
              </Button>
            ) : (
              <Button
                color="primary"
                variant="contained"
                component="span"
                startIcon={<FaCloudUploadAlt />}
              >
                Upload cabin photo
              </Button>
            )}
          </label>
        </Box>
        <Box display="flex" gap="15px">
          <Button onClick={close}>Cancel</Button>
          <Button variant="contained" type="submit">
            {isEditSession ? 'Edit Cabin' : 'Create new cabin'}
          </Button>
        </Box>
      </Box>
    </form>
  );
}

export default CabinForm;
