import { format, formatDistanceStrict, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

const DATE_FORMAT = 'yyyy-MM-dd';
const DIFF_MINUTE_STANDARD = 60 * 60;
const DIFF_DAY_STANDARD = 60 * 60 * 24;

export const getCalendarTime = (date: string | Date) => format(new Date(date), DATE_FORMAT);

export const getDiffTime = (date: Date) => {
  const d = new Date(date);
  const now = new Date();
  const diff = (now.getTime() - d.getTime()) / 1000;

  if (now.getDate() - d.getDate() === 1) {
    return format(d, DATE_FORMAT, { locale: ko });
  }

  if (diff < DIFF_MINUTE_STANDARD) {
    return formatDistanceStrict(d, now, { addSuffix: true, locale: ko, unit: 'minute' });
  }

  if (diff > DIFF_MINUTE_STANDARD && diff < DIFF_DAY_STANDARD) {
    return formatDistanceStrict(d, now, { addSuffix: true, locale: ko, unit: 'hour' });
  }

  if (diff < DIFF_DAY_STANDARD) {
    return formatDistanceToNow(d, { addSuffix: true, locale: ko });
  }
  return format(d, DATE_FORMAT, { locale: ko });
};
