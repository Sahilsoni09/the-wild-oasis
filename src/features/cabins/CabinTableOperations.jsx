import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          {
            value: "all",
            label: "All",
          },
          {
            value: "no-discount",
            label: "No Discount",
          },
          {
            value: "with-discount",
            label: "With Discount",
          },
        ]}
      />
      <SortBy
        options={[
          {
            value: "name-asc",
            label: "sort by name (A-Z)",
          },
          {
            value: "name-desc",
            label: "sort by name (Z-A)",
          },
          {
            value: "regularPrice-asc",
            label: "sort by Price (low first)",
          },
          {
            value: "regularPrice-desc",
            label: "sort by Price (high first)",
          },
          {
            value: "maxCapacity-asc",
            label: "sort by Capacity (low first)",
          },
          {
            value: "maxCapacit-desc",
            label: "sort by Capacity (high first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
