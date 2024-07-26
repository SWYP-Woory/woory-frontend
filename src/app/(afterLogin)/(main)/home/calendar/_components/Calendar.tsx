import Day from '@/app/(afterLogin)/(main)/home/calendar/_components/Day';
import LocalStorage from '@/app/_store/localstorage/LocalStorage';
import { CalenderDataType, FavoritePostType } from '@/type';
import { getCalendarTime } from '@/utils/getTime';
import { format, getDate, getMonth, parseISO } from 'date-fns';

const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

interface Props {
  createMonth: Date[];
  currentDate: Date;
  data: CalenderDataType[];
}

function findEventForDate(date: Date, events: CalenderDataType[]) {
  return events.find((event) => {
    const eventDate = parseISO(getCalendarTime(event.contentRegDate));
    return getDate(date) === getDate(eventDate);
  });
}

function renderDay(day: Date, currentDate: Date, events: CalenderDataType[], favoritesPosts?: FavoritePostType[]) {
  const isCurrentMonth = getMonth(day) === getMonth(currentDate);
  const formattedDay = format(day, 'd');
  const calendarEvent = findEventForDate(day, events);
  const date = getCalendarTime(day);
  const isLiked = favoritesPosts && favoritesPosts.find((favorite) => getCalendarTime(favorite.topicDate) === date);

  return (
    <Day
      key={formattedDay + day.toString()}
      day={formattedDay}
      date={date}
      validation={isCurrentMonth}
      hasContent={!!calendarEvent}
      imageUrl={calendarEvent?.contentImgPath}
      isLiked={!!isLiked}
    />
  );
}

export default function Calendar({ createMonth, currentDate, data }: Props) {
  const favoritesPosts = LocalStorage.getItemJson('favorites');
  return (
    <div className="flex flex-col justify-between items-center w-[34.2rem] h-[45.4rem]">
      <div className="flex justify-between items-center w-[30.4rem] h-[2.6rem]">
        {DAY_LIST.map((day) => (
          <span key={`${day}key`} className="font-body text-textDisabled">
            {day}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-x-[0.1rem] gap-y-8">
        {createMonth.map((day) => renderDay(day, currentDate, data, favoritesPosts))}
      </div>
    </div>
  );
}
