import Box from '@mui/material/Box';
import SortBy from '../../ui/SortBy';
import Filter from '../../ui/Filter';

function BookingTableOperations() {
  return (
    <>
      <Box display="flex" justifyContent="flex-end" gap={3}>
        <Filter
          filterField="status"
          options={[
            { value: 'all', label: 'All' },
            { value: 'checked-out', label: 'Checked out' },
            { value: 'checked-in', label: 'Checked in' },
            { value: 'unconfirmed', label: 'Unconfirmed' },
          ]}
        />

        <SortBy
          options={[
            { value: 'startDate-desc', label: 'Sort by date (recent first)' },
            { value: 'startDate-asc', label: 'Sort by date (earlier first)' },
            {
              value: 'totalPrice-desc',
              label: 'Sort by amount (high first)',
            },
            { value: 'totalPrice-asc', label: 'Sort by amount (low first)' },
          ]}
        />
      </Box>
    </>
  );
}

export default BookingTableOperations;
