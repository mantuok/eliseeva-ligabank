import dayjs from 'dayjs';

const getTwoDigit = (digit) => {
  if (digit <= 9) {
    return (`0` + digit);
  } 
  return digit;
}

export const today = {
  year: dayjs().year(),
  month: getTwoDigit((dayjs().month() + 1)),
  day: getTwoDigit(dayjs().date())
}