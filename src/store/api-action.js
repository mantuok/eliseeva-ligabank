import {ActionCreator} from './action';
import {adaptRatesPerPeriod} from '../services/adapter';
import {
  splitDate,
  getDatesList
} from '../utils/utils';
import axios from 'axios';

const datesList = getDatesList();

// export const fetchRates = (
//   year = splitDate().year, 
//   month = splitDate().month, 
//   day = splitDate().day
// ) => (dispatch, _getState, api) => {
//   api.get(`/${year}/${month}/${day}/daily_json.js`)
//     .then(({data}) => adaptRates(data))
//     .then((data) => dispatch(ActionCreator.loadRates(data))) 
// };

// const fetchRatesPerDates = (api) => {
//   console.log(`fetch list`)
//   datesList.forEach((date) => {
//     return api.get(`/${splitDate(date).year}/${splitDate(date).month}/${splitDate(date).day}/daily_json.js`)
//  }) 
// }


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
    ratesData.push(response.value.data)
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
    console.log(rawRates)
    return adaptRatesPerPeriod(rawRates)
    }) 
  .then((data) => {
    console.log(data)
    dispatch(ActionCreator.loadRates(data))}
  )
};

