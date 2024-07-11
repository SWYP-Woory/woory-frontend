import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

const DATE_FORMAT = 'yyyy-MM-dd';
const DIFF_STANDARD = 60 * 60 * 24 * 3;

export const getCalendarTime = (date: string | Date) => format(new Date(date), DATE_FORMAT);

export const getDiffTime = (date: Date) => {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;
  if (diff < 60) {
    return '방금 전';
  }

  if (diff < DIFF_STANDARD) {
    return formatDistanceToNow(d, { addSuffix: true, locale: ko });
  }
  return format(d, DATE_FORMAT, { locale: ko });
};
