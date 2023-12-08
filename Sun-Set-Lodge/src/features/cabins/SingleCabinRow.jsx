import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/system/Box';
import { formatCurrency } from '../../utils/helpers';
import EditCabinModal from './EditCabinModal';
import DeleteModal from './DeleteCabinModal';
import { useDeleteCabin } from './useDeleteCabin';

function SingleCabinRow({ cabin }) {
  const { deleteCabin } = useDeleteCabin();
  const {
    id: cabinId,
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
        <TableCell style={{ fontWeight: 600 }}>&mdash;</TableCell>
      )}
      <TableCell>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <EditCabinModal cabinToEdit={cabin} />
          <DeleteModal deleteCabin={() => deleteCabin(cabinId)} />
        </Box>
      </TableCell>
    </TableRow>
  );
}

export default SingleCabinRow;
