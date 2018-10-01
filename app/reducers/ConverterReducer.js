//@flow

import { ActionTypes } from '../actions/ConverterAction';

const initialState = {
    rates: {}, 
    inputNum: 0,
    convertedVal: 0,
    selectedVal: 'GBP'
};

const convert = (inputNum: Number, selectedVal: string, rates: Object) => {
     if(!inputNum || !rates[selectedVal]) return 0;
     return (Number(inputNum) * rates[selectedVal]);
};

const ConverterReducer = (state: Object = initialState, action: Object) => {
    switch (action.type) {

        case ActionTypes.UPDATE_RATES: 
            const { rates } = action.payload;
            return {
                ...state,
                rates: rates,
                convertedVal: convert(state.inputNum, state.selectedVal, rates)
            }

        case ActionTypes.UPDATE_SELECTED_CURRENCY: 
            const { selectedVal } = action.payload;
            return {
                ...state,
                selectedVal: selectedVal,
                convertedVal: convert(state.inputNum, selectedVal, state.rates)
            }  
         
        case ActionTypes.UPDATE_INPUT_NUM:
            const { num } = action.payload;
            return {
                ...state,
                inputNum: num,
                convertedVal: convert(num, state.selectedVal, state.rates)
            }

        default: return state;
    }
}

export default ConverterReducer;