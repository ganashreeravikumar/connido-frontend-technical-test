import { ActionTypes } from '../actions/ConverterAction';

const initialState = {
    rates: [], 
    selectedVal: 'GBP'
}

export default ConverterReducer = (state = initialState, action) => {
    switch(action.type) {

        case ActionTypes.UPDATE_RATES: 
            const { rates } = action.payload;
            return {
                ...state,
                rates: rates,
            }

        case ActionTypes.UPDATE_SELECTED_CURRENCY: 
            const { selectedVal } = action.payload;
            return {
                ...state,
                selectedVal: selectedVal
            }    

        default: return state;
    }
}