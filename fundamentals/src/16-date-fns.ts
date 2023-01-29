/*
  Using external library 'date-fns'
  subDays: to substract days, function subDays(date: Date | number, amount: number): Date
  format: To give the date a format, function format(date: Date | number, format: string, options?: {
    locale?: Locale;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    firstWeekContainsDate?: number;
    useAdditionalWeekYearTokens?: boolean;
    useAdditionalDayOfYearTokens?: boolean;
}): string
*/
import { subDays, format } from 'date-fns'; // using external library

const date = new Date(1998, 1, 28); // in JS: 0 = enero, 1 = febrero
const rta = subDays(date, 30); // 30 the amount of days to substract
const str = format(rta, 'yyyy/MM/dd'); // to use a date format

console.log(str);
