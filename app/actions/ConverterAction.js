//@flow

const ActionTypes = {
    UPDATE_RATES: 'UPDATE_RATES',
    UPDATE_INPUT_NUM: 'UPDATE_INPUT_NUM',
    UPDATE_SELECTED_CURRENCY: 'UPDATE_SELECTED_CURRENCY'
};

const updateRates = (rates: Object)  =>  ({ 
    type: ActionTypes.UPDATE_RATES, 
    payload: {rates: rates} 
});

const updateInputNumber = (input: Number) =>  ({ 
    type: ActionTypes.UPDATE_INPUT_NUM, 
    payload: { num: input } 
});

const updateSelectedCurrency = (selectedVal: string) => ({ 
    type: ActionTypes.UPDATE_SELECTED_CURRENCY,
    payload: { selectedVal } 
});

export { 
    ActionTypes, 
    updateRates, 
    updateSelectedCurrency, 
    updateInputNumber 
};