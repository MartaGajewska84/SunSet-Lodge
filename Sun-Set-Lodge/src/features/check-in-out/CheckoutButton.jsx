import Button from '@mui/material/Button';
import { useCheckout } from './useCheckOut';

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      variant="outlined"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
      sx={{ height: '2rem', width: '8rem' }}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
