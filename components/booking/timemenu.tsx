'use client';

import { GetBookingTime, getMovieDetail } from '@/utils/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { NewButton, TimeButton } from '@/styles';
import { lockRoute } from '@/utils/auth';
import { Movies } from '@/utils/types';
import { pathToPoster } from '@/utils/const';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { selectSchedule, setSchedule } from '@/redux/slices/timeSlice';
import Modal from '../shared/modal';

interface Schedule {
  scheduleId: number;
  timeStart: string;
  price: number;
}

export default function TimeMenu({ id }: { id: string }) {
  lockRoute();
  const router = useRouter();
  const [bookingTime, setBookingTime] = useState<Schedule[]>([]);
  const [detail, setDetail] = useState<Movies>();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const selectScheduleId = useSelector(
    (state: RootState) => state.time.selectScheduleId
  );

  const setScheduleId = useSelector(
    (state: RootState) => state.time.setScheduleId
  );

  const confirmClick = () => {
    dispatch(setSchedule());
    setShowModal(true);
  };

  const handleModalConfirm = () => {
    router.push(`/movies/${id}/book/seat/${setScheduleId}`);
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
    router.refresh();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetBookingTime(id);
        const data = await response?.json();
        const detail = await getMovieDetail(id);
        console.log(data.data);
        setBookingTime(data.data);
        setDetail(detail.data);
      } catch (error) {
        console.error('Error fetching data : ', error);
      }
    };

    fetchData();
  }, [id]);

  const formatTime = (timeString: string): string => {
    const formattedTime = new Date(timeString).toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
    return formattedTime;
  };

  return (
    <div className='flex-col w-[70%]'>
      <div className='flex'>
        <img src={`${detail?.poster}`} className='h-[500px]' />
        <div className='flex-col px-5'>
          <div className='w-[80%]'>
            <h2 className='text-3xl mb-10'>{detail?.title}</h2>
          </div>
          <div className='flex items-center justify-center space-x-2'>
            {bookingTime.map((schedule) => (
              <TimeButton
                key={schedule.scheduleId}
                onClick={() => dispatch(selectSchedule(schedule.scheduleId))}
                className={`${
                  selectScheduleId === schedule.scheduleId
                    ? 'bg-secondary border-customwhite-1 text-customwhite-1'
                    : ''
                } py-2 px-4 rounded border-2 transition duration-300 ease-in-out`}
              >
                {formatTime(schedule.timeStart)}
              </TimeButton>
            ))}
          </div>

          <div className='mt-8'>
            <NewButton className='mt-8' onClick={confirmClick}>
              Choose seat
            </NewButton>
          </div>
          {showModal && (
            <Modal onConfirm={handleModalConfirm} onClose={closeModal} />
          )}
        </div>
      </div>
    </div>
  );
}
