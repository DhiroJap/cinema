import SeatMenu from '@/components/booking/seatmenu';
import { Page } from '@/styles';
import { lockRoute } from '@/utils/auth';

export default function BookSeat({ params }: { params: { id: string } }) {
  return (
    <Page display='flex' $justifyContent='center' $alignItems='center'>
      <SeatMenu id={params.id as string} />
    </Page>
  );
}
