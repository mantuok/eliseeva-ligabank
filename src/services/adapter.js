import {
  Rate,
  DEFAULT_RATE
} from '../const';
import {formatDate} from '../utils/utils';

export const adaptRatesPerPeriod = (rawDataPerPeriod) => {
  let adaptedList = [];
  rawDataPerPeriod.map((rawItem) => {
    return adaptedList.push(adaptRatesPerDay(rawItem))
  })
  return adaptedList;
}

export const adaptRatesPerDay = (rawDataPerDay) => {
  const rates = Object.keys(Rate);
  const rubIndex = rates.indexOf(`RUB`);
  rates.splice(rubIndex, 1);

  let adaptedRatesPerDay = {
    date: formatDate(rawDataPerDay.Date),
    rates: {
      RUB: DEFAULT_RATE
    }
  };

  rates.map((rate) => {
    return adaptedRatesPerDay = ({
      ...adaptedRatesPerDay,
      rates: {
        ...adaptedRatesPerDay.rates,
        [rate]: rawDataPerDay.Valute[rate].Value
      }
    })
  })
  return adaptedRatesPerDay;
}
