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
export const todayFormatted = dayjs().format(`DD.MM.YYYY`);
// export const today = dayjs().format(`DD.MM.YYYY`);
export const minDay = dayjs().subtract(DayLimit.MIN, `day`).toString();

export const formatDate = (rawDate) => {
  return dayjs(rawDate).format(`DD.MM.YYYY`)
}

export const isRateAlreadyDownloaded = (rates, selectedDate) => {
  return rates.some((rate) => {
    const downloadedDate = (Object.values(rate))[0];
    return downloadedDate === selectedDate;
  })
}