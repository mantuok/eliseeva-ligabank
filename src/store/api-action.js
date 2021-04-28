import {ActionCreator} from './action';
import {adaptRatesPerPeriod} from '../services/adapter';
import {
  splitDate,
  getDatesList
} from '../utils/utils';

const datesList = getDatesList();

const getRequestsList = (api) => {
  let requestsList = []
  datesList.forEach((date) => {
    requestsList.push(api.get(`/${splitDate(date).year}/${splitDate(date).month}/${splitDate(date).day}/daily_json.js`))
  }) 
  return requestsList;
}

const getRatesData = (items) => {
  const successResponses = getSuccessResponses(items);
  let ratesData = [];
  successResponses.map((response) => {
    return ratesData.push(response.value.data)
  })
  return ratesData;
}

const getSuccessResponses = (items) => {
  return items.filter((item) => item.status === `fulfilled`)
}

export const fetchRatesPerPeriod = () => (dispatch, _getState, api) => {
  Promise.allSettled(getRequestsList(api))
  .then((data) => {
    const rawRates = getRatesData(data);
    return adaptRatesPerPeriod(rawRates)
    }) 
  .then((data) => {
    dispatch(ActionCreator.loadRates(data))}
  )
};

