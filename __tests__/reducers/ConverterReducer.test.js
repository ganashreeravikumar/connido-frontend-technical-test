import ConverterReducer from '../../app/reducers/ConverterReducer';
import { ActionTypes } from '../../app/actions/ConverterAction'; 

const initialState = {
    rates: {}, 
    inputNum: 0,
    convertedVal: 0,
    selectedVal: 'GBP'
};

const initialStateWithRates = {
    rates: {'GBP': 0.8960, 'INR': 85.67}, 
    inputNum: 0,
    convertedVal: 0,
    selectedVal: 'GBP'
};

const ratesPayload = {
    payload: { rates: {'GBP': 0.8960, 'INR': 85.67} },
    type: ActionTypes.UPDATE_RATES,
};


const selectedValPayload = {
    payload: { selectedVal: 'INR'},
    type: ActionTypes.UPDATE_SELECTED_CURRENCY,
};

const selectedNumber = { 
    type: ActionTypes.UPDATE_INPUT_NUM, 
    payload: { num: 12 } 
}


describe('Converter Reducer', () => {
    it('should return the initial state', () => {
        expect(ConverterReducer(undefined, { })).toEqual(initialState);
        expect(ConverterReducer(initialState, {})).toEqual(initialState);
        expect(ConverterReducer(undefined, { type: 'UPDATE'})).toEqual(initialState);
    });

    it('should update rates', () => {

        expect(ConverterReducer(initialState, ratesPayload)).toEqual({
            ...initialState,
            rates: {'GBP': 0.8960, 'INR': 85.67}
        });

        expect(ConverterReducer(undefined, ratesPayload)).toEqual({
            ...initialState,
            rates: {'GBP': 0.8960,'INR': 85.67}
        });

        expect(ConverterReducer({}, ratesPayload)).toEqual({
            rates: {'GBP': 0.8960, 'INR': 85.67},  
            convertedVal: 0
        });

    });

    it('should update selected currency', () => {

        expect(ConverterReducer(initialState, selectedValPayload)).toEqual({
            ...initialState,
            selectedVal: 'INR'
        });

        expect(ConverterReducer(undefined, selectedValPayload)).toEqual({
            ...initialState,
            selectedVal: 'INR'
        });

        expect(ConverterReducer({}, selectedValPayload)).toEqual({
            selectedVal: 'INR',
            convertedVal: 0
        });

    });

    it('should update input number', () => {

        expect(ConverterReducer(initialStateWithRates, selectedNumber)).toEqual({
            ...initialState,
            rates: {'GBP': 0.8960, 'INR': 85.67}, 
            inputNum: 12,
            convertedVal: 10.752
        });
    });
})