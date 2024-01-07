import { useForm, Controller } from 'react-hook-form';
import { Stack, Button, TextField, Paper } from '@mui/material';
import { useUpdateUser } from './useUpdateUser';

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset, control } =
    useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    
    updateUser({ password }, { onSuccess: () => reset() });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper elevation={1} sx={{ p: '3rem', pt:"0rem" }}>
        <Stack>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ m: 1, width: '35ch' }}
                defaultValue=""
                error={!!errors.password}
                helperText={errors.password?.message}
                id="password"
                label="New password (min 8 characters)"
                type="password"
                variant="outlined"
                {...register('password', {
                  required: 'This field is required',
                  minLength: {
                    value: 8,
                    message: 'Password needs a minimum of 8 characters',
                  },
                })}
              />
            )}
            name="password"
            control={control}
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ m: 1, width: '35ch' }}
                defaultValue=""
                error={!!errors.passwordConfirm}
                helperText={errors.passwordConfirm?.message}
                id="passwordConfirm"
                label="Confirm the password"
                type="password"
                variant="outlined"
                {...register('passwordConfirm', {
                  required: 'This field is required',
                  validate: (value) =>
                    value === getValues().password || 'Passwords need to match',
                })}
              />
            )}
            name="passwordConfirm"
            control={control}
          />
        </Stack>

        <Stack direction="row">
          <Button
            type="reset"
            variant="contained"
            sx={{ mt: '1rem', ml: 1, mr: 1 }}
            onClick={reset}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ mt: '1rem', ml: 1, mr: 1 }}
            type="submit"
            disabled={isUpdating}
          >
            Update password
          </Button>
        </Stack>
      </Paper>
    </form>
  );
}

export default UpdatePasswordForm;
