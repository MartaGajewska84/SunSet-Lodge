import { useForm, Controller } from 'react-hook-form';
import { Stack, Button, TextField, Paper } from '@mui/material';

import { useSettings } from './useSettings';
import { useUpdateSettings } from './useUpdateSettings';
import Spinner from '../../ui/Spinner';

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSettings();
  const { handleSubmit, reset, control, register, formState } = useForm({});

  const { errors } = formState;

  if (isUpdating) return <Spinner />;

  function onSubmit({
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  }) {
    updateSetting(
      {
        minBookingLength,
        maxBookingLength,
        maxGuestsPerBooking,
        breakfastPrice,
      },
      {
        onSuccess: () => reset(),
      }
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper elevation={1} sx={{ p: '3rem', width: '50%' }}>
          <Stack spacing={2}>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  id="minBookingLength"
                  label="Minimum nights/booking"
                  defaultValue={minBookingLength}
                  type="number"
                  variant="outlined"
                  {...register('minBookingLength', {
                    required: 'This field is required',
                  })}
                  error={!!errors.minBookingLength}
                  helperText={errors.minBookingLength?.message}
                />
              )}
              name="minBookingLength"
              control={control}
            />
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  defaultValue={maxBookingLength}
                  error={!!errors.maxBookingLength}
                  helperText={errors.maxBookingLength?.message}
                  id="maxBookingLength"
                  label="Maximum nights/bookings"
                  type="number"
                  variant="outlined"
                  {...register('maxBookingLength', {
                    required: 'This field is required',
                  })}
                />
              )}
              name="maxBookingLength"
              control={control}
            />
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  defaultValue={maxGuestsPerBooking}
                  error={!!errors.maxGuestsPerBooking}
                  helperText={errors.maxGuestsPerBooking?.message}
                  id="maxGuestsPerBooking"
                  label="Maximum guests/bookings"
                  type="number"
                  variant="outlined"
                  {...register('maxGuestsPerBooking', {
                    required: 'This field is required',
                  })}
                />
              )}
              name="maxGuestsPerBooking"
              control={control}
            />

            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  defaultValue={breakfastPrice}
                  error={!!errors.breakfastPrice}
                  helperText={errors.breakfastPrice?.message}
                  id="breakfastPrice"
                  label="Breakfast price"
                  type="number"
                  variant="outlined"
                  {...register('breakfastPrice', {
                    required: 'This field is required',
                  })}
                />
              )}
              name="breakfastPrice"
              control={control}
            />
          </Stack>
          <Stack
            direction="row"
            display="flex"
            gap="15px"
            mt="2rem"
            justifyContent="flex-end"
          >
            <Button type="reset" onClick={reset} disabled={isLoading}>
              Cancel
            </Button>
            <Button variant="contained" type="submit" disabled={isLoading}>
              Update settings
            </Button>
          </Stack>
        </Paper>
      </form>
    </>
  );
}

export default UpdateSettingsForm;
