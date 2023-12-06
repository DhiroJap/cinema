import SeatMenu from "@/components/booking/seatmenu";
import { Page } from "@/styles";

export default function BookSeat({
  params,
}: {
  params: { scheduleId: string };
}) {
  return (
    <Page display="flex" $justifyContent="center" $alignItems="center">
      <SeatMenu scheduleId={params.scheduleId} />
    </Page>
  );
}
