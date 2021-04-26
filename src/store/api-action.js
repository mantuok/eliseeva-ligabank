import {ActionCreator} from './action';
import {adaptRates} from '../services/adapter';
import {splitDate} from '../utils/utils';

export const fetchRates = (
  year = splitDate().year, 
  month = splitDate().month, 
  day = splitDate().day
) => (dispatch, _getState, api) => {
  api.get(`/${year}/${month}/${day}/daily_json.js`)
    .then(({data}) => adaptRates(data))
    .then((data) => dispatch(ActionCreator.loadRates(data))) 
};