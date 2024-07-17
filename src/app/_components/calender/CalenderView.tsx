'use client';

import Calender from '@/app/_components/calender/Calender';
import DateController from '@/app/_components/common/dateController/DateController';
import { useDateControl } from '@/app/_hooks/useDateControl';
import { CalenderDataType } from '@/type';
import { addDays, differenceInCalendarDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from 'date-fns';
import { useMemo } from 'react';

interface Props {
  data: CalenderDataType;
}

export default function CalenderView({ data }: Props) {
  const { currentDate, prevMonthHandler, nextMonthHandler } = useDateControl();
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
    <section className="flex flex-col gap-24 items-center w-[34.2rem] bg-white">
      <DateController
        date={format(currentDate, 'yyyy.MM')}
        prevHandler={prevMonthHandler}
        nextHandler={nextMonthHandler}
      />
      <Calender createMonth={createMonth} currentDate={currentDate} data={data} />
    </section>
  );
}
