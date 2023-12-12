import CabinTable from '../features/cabins/CabinTable';
import AddCabinModal from '../features/cabins/AddCabinModal';
import CabinTableOperations from '../features/cabins/CabinTableOperations';

function Cabins() {
  return (
    <>
      <CabinTableOperations />
      <CabinTable />
      <AddCabinModal />
    </>
  );
}

export default Cabins;
