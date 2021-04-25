import {loadRates} from './action';
import {adaptRates} from '../services/adapter';

export const fetchRates = () => (dispatch, _getState, api) => {
  api.get('/2021/04/21/daily_json.js')
    .then(({data}) => adaptRates(data))
    .then((data) => dispatch(loadRates(data))) 
};