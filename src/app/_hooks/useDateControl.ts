import { addDays, addMonths, subDays, subMonths } from 'date-fns';
import { useCallback, useState } from 'react';

export const useDateControl = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const prevDayHandler = useCallback(() => {
    setCurrentDate(subDays(currentDate, 1));
  }, [currentDate]);

  const nextDayHandler = useCallback(() => {
    setCurrentDate(addDays(currentDate, 1));
  }, [currentDate]);

  const prevMonthHandler = useCallback(() => {
    setCurrentDate(subMonths(currentDate, 1));
  }, [currentDate]);

  const nextMonthHandler = useCallback(() => {
    setCurrentDate(addMonths(currentDate, 1));
  }, [currentDate]);

  return { currentDate, setCurrentDate, prevDayHandler, nextDayHandler, prevMonthHandler, nextMonthHandler };
};
