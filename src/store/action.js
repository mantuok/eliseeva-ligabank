export const ActionType = {
  LOAD_RATES: `rates/loadRates`,
  CLEAR_RATES: `rates/clearRates`,
  SAVE_CONVERSION: `conversions/saveConversion`,
  CLEAR_CONVERSIONS: `conversions/clearConversions`,
  REMOVE_CONVERSION: `conversions/removeConversion`,
  SET_FAILED_LOAD: `rates/setFailedLoad`
};

export const ActionCreator = {
  loadRates: (rates) => ({
    type: ActionType.LOAD_RATES,
    payload: rates
  }),
  clearRates: () => ({
    type: ActionType.CLEAR_RATES
  }),
  saveConversion: (conversionData) => ({
    type: ActionType.SAVE_CONVERSION,
    payload: conversionData
  }),
  clearConversions: () => ({
    type: ActionType.CLEAR_CONVERSIONS
  }),
  removeConversion: () => ({
    type: ActionType.REMOVE_CONVERSION
  }),
  setFailedLoad: () => ({
    type: ActionType.SET_FAILED_LOAD
  })
};