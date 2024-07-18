'use client';

import Calendar from '@/app/(afterLogin)/(main)/home/calendar/[month]/_components/calendar/Calendar';
import DateController from '@/app/_components/common/dateController/DateController';
import { useDateControl } from '@/app/_hooks/useDateControl';
import { CalenderDataType } from '@/type';
import { addDays, differenceInCalendarDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from 'date-fns';
import { useMemo, useState } from 'react';

const DUMMY_DATA = {
  userId: 1,
  calender: [
    {
      date: '2024-07-12',
      url: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
      isLiked: true,
    },
    {
      date: '2024-07-16',
      url: '',
      isLiked: true,
    },
    {
      date: '2024-07-17',
      url: '',
      isLiked: false,
    },
    {
      date: '2024-07-27',
      url: '',
      isLiked: true,
    },
    {
      date: '2024-07-28',
      url: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_1.jpg',
      isLiked: false,
    },
  ],
};

export default function CalendarView() {
  const { currentDate, prevMonthHandler, nextMonthHandler } = useDateControl();
  const [calendarData] = useState<CalenderDataType>(DUMMY_DATA);
  const monthStart = startOfMonth(currentDate); // 현재 달의 시작 날짜 (요일 포함)
  const monthEnd = endOfMonth(currentDate); // 현재 달의 마지막 날짜 (요일 포함)
  const startDate = startOfWeek(monthStart); // 현재 달의 시작 날짜가 포함된 주의 시작 날짜
  const endDate = endOfWeek(monthEnd); // 현재 달의 마지막 날짜가 포함된 주의 끝 날짜

  const createMonth = useMemo(() => {
    const monthArray = [];
    let day = startDate;
    while (differenceInCalendarDays(endDate, day) >= 0) {
      monthArray.push(day);
      day = addDays(day, 1);
    }
    return monthArray;
  }, [startDate, endDate]);

  return (
    <section className="flex flex-col gap-24 items-center w-[34.2rem] min-h-screen bg-white">
      <DateController
        date={format(currentDate, 'yyyy.MM')}
        prevHandler={prevMonthHandler}
        nextHandler={nextMonthHandler}
      />
      <Calendar createMonth={createMonth} currentDate={currentDate} data={calendarData} />
    </section>
  );
}
