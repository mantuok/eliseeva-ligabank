export const ActionType = {
  LOAD_RATES: `rates/loadRates`,
  CLEAR_RATES: `rates/clearRates`,
  SAVE_CONVERSION: `conversions/saveConversion`,
  CLEAR_CONVERSIONS: `conversions/clearConversions`,
  REMOVE_CONVERSION: `conversions/removeConversion`,
  SET_FAILED_LOAD: `rates/setFailedLoad`
};

export const loadRates = (rates) => ({
  type: ActionType.LOAD_RATES,
  payload: rates
});

export const clearRates = () => ({
  type: ActionType.CLEAR_RATES
});

export const saveConversion = (conversionData) => ({
  type: ActionType.SAVE_CONVERSION,
  payload: conversionData
});

export const clearConversions = () => ({
  type: ActionType.CLEAR_CONVERSIONS
})

export const removeConversion = () => ({
  type: ActionType.REMOVE_CONVERSION
})

export const setFailedLoad = () => ({
  type: ActionType.SET_FAILED_LOAD
})