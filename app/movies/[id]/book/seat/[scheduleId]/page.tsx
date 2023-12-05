import SeatMenu from '@/components/booking/seatmenu';
import { Page } from '@/styles';

export default function BookSeat({ scheduleId }: { scheduleId: number }) {
  return (
    <Page display='flex' $justifyContent='center' $alignItems='center'>
      <SeatMenu scheduleId={scheduleId} />
    </Page>
  );
}
