import {loadRates} from './action';
import {adaptRates} from '../services/adapter';

export const fetchRates = (year, month, day) => (dispatch, _getState, api) => {
  api.get(`/${year}/${month}/${day}/daily_json.js`)
    .then(({data}) => adaptRates(data))
    .then((data) => dispatch(loadRates(data))) 
};