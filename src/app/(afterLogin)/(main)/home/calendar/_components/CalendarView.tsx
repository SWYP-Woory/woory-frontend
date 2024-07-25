'use client';

import Calendar from '@/app/(afterLogin)/(main)/home/calendar/_components/Calendar';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import DateController from '@/app/_components/common/dateController/DateController';
import { useDateControl } from '@/app/_hooks/useDateControl';
import { getCookies } from '@/app/_store/cookie/cookies';
import { CalenderDataType } from '@/type';
import { addDays, differenceInCalendarDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';

export default function CalendarView() {
  const { currentDate, prevMonthHandler, nextMonthHandler } = useDateControl();
  const [calendarData, setCalenderData] = useState<CalenderDataType[]>();
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

  useEffect(() => {
    const fetchCalenderData = async () => {
      try {
        const groupId = getCookies('groupId');
        const { data } = await getData({
          path: `${apiRoutes.getMonthPost}?groupId=${groupId}&param=${format(currentDate, 'yyyy-MM')}`,
        });
        setCalenderData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCalenderData();
  }, [currentDate]);

  const handlePrev = () => {
    setCalenderData([]);
    prevMonthHandler();
  };

  const handleNext = () => {
    setCalenderData([]);
    nextMonthHandler();
  };

  return (
    <section className="flex flex-col gap-24 items-center w-[34.2rem] min-h-screen bg-white">
      <DateController date={format(currentDate, 'yyyy.MM')} prevHandler={handlePrev} nextHandler={handleNext} />
      {calendarData && <Calendar createMonth={createMonth} currentDate={currentDate} data={calendarData} />}
    </section>
  );
}
