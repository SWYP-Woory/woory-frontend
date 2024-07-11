import { format } from 'date-fns';

export const getTime = (date: string | Date) => format(new Date(date), 'yyyy-MM-dd');
