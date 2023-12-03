import { useForm, Controller } from 'react-hook-form';
import { Stack, Button, Box, TextField, InputAdornment } from '@mui/material';
import { HiXMark } from 'react-icons/hi2';

import { useCreateCabin } from './useCreateCabin';
import { useEditCabin } from './useEditCabin';

function CabinForm({ close, cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  //console.log(editId, editValues);
  const { createCabin } = useCreateCabin();
  const { editCabin } = useEditCabin();

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, control, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;
  
  function onSubmit(data) {
    console.log(data);
    const image = typeof data.image === 'string' ? data.image : data.image[0];
    console.log(image)
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
        <Button onClick={close}>
          <HiXMark style={{ width: '1.5rem', height: '1.5rem' }} />
        </Button>
      </Box>
      <Box sx={{ width: '75%' }}>
        <Stack spacing={2}>
          <Controller
            render={({ field }) =>
              errors?.name?.message ? (
                <TextField
                  error
                  id="name"
                  helperText="Please enter cabin name"
                  variant="outlined"
                />
              ) : (
                <TextField
                  {...field}
                  
                  id="name"
                  label="Cabin name"
                  variant="outlined"
                  {...register('name', {
                    required: 'This field is required',
                  })}
                />
              )
            }
            name="name"
            control={control}
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
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
            // style={{ display: 'none' }}
            id="image"
            multiple
            type="file"
            {...register('image', {
              required: isEditSession ? false : 'This field is required',
            })}
          />
          <label htmlFor="image">
            <Button color="primary" variant="contained" component="span">
              Upload cabin photo
            </Button>
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
