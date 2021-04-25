import {loadRates} from './action';
import {adaptRatesToClient} from '../services/adapter';

export const fetchRates = () => (dispatch, _getState, api) => {
  api.get('/2021/04/21/daily_json.js')
    .then(({data}) => dispatch(loadRates(data))) 
    .then((data) => adaptRatesToClient(data))
};