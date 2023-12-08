import CabinTable from '../features/cabins/CabinTable';
import AddCabinModal from '../features/cabins/AddCabinModal';
import Filter from '../ui/Filter';

function Cabins() {
  return (
    <>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
      />
      <CabinTable />
      <AddCabinModal />
    </>
  );
}

export default Cabins;
