import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isPending: isPending1, bookings } = useRecentBookings();
  const {
    isPending: isPending2,
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { isPending: isPending3, cabins } = useCabins();

  if (isPending1 || isPending2 || isPending3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      ></Stats>
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
