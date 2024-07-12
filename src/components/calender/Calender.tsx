import Day from '@/components/calender/Day';
import { CalendarEventType, CalenderDataType } from '@/type';
import { format, getDate, getMonth, parseISO } from 'date-fns';

const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

interface Props {
  createMonth: Date[];
  currentDate: Date;
  data: CalenderDataType;
}

function findEventForDate(date: Date, events: CalendarEventType[]) {
  return events.find((event) => {
    const eventDate = parseISO(event.date);
    return getDate(date) === getDate(eventDate);
  });
}

function renderDay(day: Date, currentDate: Date, events: CalendarEventType[]) {
  const isCurrentMonth = getMonth(day) === getMonth(currentDate);
  const formattedDay = format(day, 'd');
  const calendarEvent = findEventForDate(day, events);

  return (
    <Day
      key={formattedDay + day.toString()}
      day={formattedDay}
      validation={isCurrentMonth}
      hasContent={!!calendarEvent}
      imageUrl={calendarEvent?.url}
      isLiked={calendarEvent?.isLiked}
    />
  );
}

export default function Calender({ createMonth, currentDate, data }: Props) {
  return (
    <div className="flex flex-col justify-between items-center w-[34.2rem] h-[45.4rem]">
      <div className="flex justify-between items-center w-[30.4rem] h-[2.6rem]">
        {DAY_LIST.map((day) => (
          <span className="font-body text-textDisabled">{day}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-x-[0.1rem] gap-y-8">
        {createMonth.map((day) => renderDay(day, currentDate, data.calender))}
      </div>
    </div>
  );
}
