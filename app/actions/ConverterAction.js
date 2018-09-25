
const ActionTypes = {
    UPDATE_RATES: 'UPDATE_RATES',
    UPDATE_SELECTED_CURRENCY: 'UPDATE_SELECTED_CURRENCY'
}

const updateRates = (rates) =>  ({ 
    type: ActionTypes.UPDATE_RATES, 
    payload: {rates: rates} 
});

const updateSelectedCurrency = (selectedVal) => ({ 
    type: ActionTypes.UPDATE_SELECTED_CURRENCY,
    payload: { selectedVal } 
});

export { ActionTypes, updateRates, updateSelectedCurrency };