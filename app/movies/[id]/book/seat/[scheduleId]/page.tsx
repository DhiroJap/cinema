import SeatMenu from '@/components/booking/seatmenu';
import { Page } from '@/styles';

export default function BookSeat({
  params,
}: {
  params: { scheduleId: number };
}) {
  console.log(params.scheduleId);
  return (
    <Page display='flex' $justifyContent='center' $alignItems='center'>
      <SeatMenu scheduleId={params.scheduleId} />
    </Page>
  );
}
