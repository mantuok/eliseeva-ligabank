import {ActionType} from './action';

const initialState = {
  rates: [],
  conversions: [],
  isDataloaded: false,
  isLoadFailed: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case ActionType.LOAD_RATES:
        return {
          ...state,
          isDataloaded: true,
          isLoadFailed: false,
          rates: action.payload
        };
      case ActionType.CLEAR_RATES:
        return {
          ...state,
          rates: []
        };
      case ActionType.SAVE_CONVERSION:
        return {
          ...state,
          conversions: [...state.conversions, action.payload]
        };
      case ActionType.CLEAR_CONVERSIONS:
        return {
          ...state,
          conversions: []
        };
      case ActionType.REMOVE_CONVERSION: 
        return {
          ...state,
          conversions: state.conversions.slice(1)
        };
      case ActionType.SET_FAILED_LOAD:
        return {
          ...state,
          isLoadFailed: true
        }
      default:
        return state;
  }
};

export {reducer};