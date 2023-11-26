import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/system/Box';
import { formatCurrency } from '../../utils/helpers';
import EditModal from '../../ui/EditModal';
import DeleteModal from '../../ui/deleteModal';

function SingleCabinRow({ cabin }) {
  const {
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>
        <Box
          component="img"
          sx={{
            width: '6.4rem',
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="A cabin"
          src={image}
        />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>Fits up to {maxCapacity} guests</TableCell>
      <TableCell>{formatCurrency(regularPrice)}</TableCell>
      {discount ? (
        <TableCell>{formatCurrency(discount)}</TableCell>
      ) : (
        <span>&mdash</span>
      )}
      <TableCell>
        <EditModal/>
        <DeleteModal/>
      </TableCell>
    </TableRow>
  );
}

export default SingleCabinRow;