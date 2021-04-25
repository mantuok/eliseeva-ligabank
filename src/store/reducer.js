import {ActionType} from './action';

const initialState = {
  rates: [],
  converstions: [],
  isDataloaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case ActionType.LOAD_RATES:
        return {
          ...state,
          isDataloaded: true,
          rates: [...state.rates, action.payload]
        };
      case ActionType.CLEAR_RATES:
        return {
          ...state,
          rates: []
        };
      case ActionType.SAVE_CONVERSION:
        return {
          ...state,
          converstions: state.converstions.push(action.payload)
        };
      case ActionType.CLEAR_CONVERSIONS:
        return {
          ...state,
          converstions: []
        };
      case ActionType.REMOVE_CONVERSION: 
        return {
          ...state,
          converstions: state.converstions.shift()
        };
}

  console.log(state)

  return state;
};

export {reducer};