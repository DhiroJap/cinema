import SeatMenu from "@/components/booking/seatmenu";
import { Page } from "@/styles";

export default function BookSeat({
  params,
}: {
<<<<<<< HEAD
  params: { scheduleId: number };
}) {
  console.log(params.scheduleId);
  return (
    <Page display='flex' $justifyContent='center' $alignItems='center'>
=======
  params: { scheduleId: string };
}) {
  return (
    <Page display="flex" $justifyContent="center" $alignItems="center">
>>>>>>> 25e0182e2ee7e9ae0055d9aa961e92be425ac008
      <SeatMenu scheduleId={params.scheduleId} />
    </Page>
  );
}
