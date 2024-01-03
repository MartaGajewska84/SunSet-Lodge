import { useForm, Controller } from 'react-hook-form';
import { Stack, Button, TextField, Paper } from '@mui/material';
import { useSignup } from './useSignUp';

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, handleSubmit, reset, getValues, control, formState } =
    useForm({
      defaultValues: {},
    });

  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper elevation={1} sx={{ p: '3rem' }}>
        <Stack spacing={2}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                defaultValue=""
                id="fullName"
                label="Full name"
                variant="outlined"
                {...register('fullName', {
                  required: 'This field is required',
                })}
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
              />
            )}
            name="fullName"
            control={control}
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                defaultValue=""
                error={!!errors.email}
                helperText={errors.email?.message}
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                {...register('email', {
                  required: 'This field is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Please provide a valid email address',
                  },
                })}
              />
            )}
            name="email"
            control={control}
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                defaultValue=""
                error={!!errors.password}
                helperText={errors.password?.message}
                id="password"
                label="Password (min 8 characters)"
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
            Create new user
          </Button>
        </Stack>
      </Paper>
    </form>
  );
}

export default SignupForm;
