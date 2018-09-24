
const ActionTypes = {
    UPDATE_RATES: 'UPDATE_RATES',
    UPDATE_SELECTED_CURRENCY: 'UPDATE_SELECTED_CURRENCY'
}

const updateRates = (rates) => dispatch => {
        console.log('Action called');
        dispatch({ type: ActionTypes.UPDATE_RATES, payload: { rates} });
};

const updateSelectedCurrency = (selectedVal) => dispatch => {
    dispatch({ type: ActionTypes.UPDATE_SELECTED_CURRENCY, payload: { selectedVal } });
};

export { ActionTypes, updateRates, updateSelectedCurrency };