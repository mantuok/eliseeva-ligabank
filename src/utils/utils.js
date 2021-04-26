import dayjs from 'dayjs';
import {DayLimit} from '../const';

const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat)

const getTwoDigit = (digit) => {
  if (digit <= 9) {
    return (`0` + digit);
  } 
  return digit;
}

// export const todaySplit = {
//   year: dayjs().year(),
//   month: getTwoDigit((dayjs().month() + 1)),
//   day: getTwoDigit(dayjs().date())
// }

export const splitDate = (rawDate = dayjs()) => {
  if (!dayjs.isDayjs(rawDate)) {
    rawDate = dayjs(rawDate, 'DD.MM.YYYY')
  }

  const splittedDated = {
    year: dayjs(rawDate).year(),
    month: getTwoDigit((dayjs(rawDate).month() + 1)),
    day: getTwoDigit(dayjs(rawDate).date())
  }
  return splittedDated;
}

export const today = dayjs().toString();
export const minDay = dayjs().subtract(DayLimit.MIN, `day`).toString();