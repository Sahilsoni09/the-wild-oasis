import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isPending, cabins } = useCabins();
  const [searchParams] = useSearchParams();
  if (!cabins?.length) return <Empty resourceName="cabins" />;
  // 1) FILTER
  const filtervalue = searchParams.get("discount") || "all";

  let filteredCabins;

  if (filtervalue === "all") {
    filteredCabins = cabins;
  }
  if (filtervalue === "no-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  }
  if (filtervalue === "with-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  }

  if (isPending) return <Spinner />;

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={cabins}
          // data={filteredCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
