import ConverterReducer from '../../app/reducers/ConverterReducer';
import { ActionTypes } from '../../app/actions/ConverterAction'; 

const initialState = {
    rates: [], 
    selectedVal: 'GBP'
};

const ratesPayload = {
    payload: { rates: [{'GBP': 0.8960}, {'INR': 85.67}]},
    type: ActionTypes.UPDATE_RATES,
};


const selectedValPayload = {
    payload: { selectedVal: 'INR'},
    type: ActionTypes.UPDATE_SELECTED_CURRENCY,
};


describe('Converter Reducer', () => {
    it('should return the initial state', () => {
        expect(ConverterReducer(undefined, { })).toEqual(initialState);
        expect(ConverterReducer(initialState, {})).toEqual(initialState);
        expect(ConverterReducer(undefined, { type: 'UPDATE'})).toEqual(initialState);
    });

    it('should update rates', () => {

        expect(ConverterReducer(initialState, ratesPayload)).toEqual({
            rates: [{'GBP': 0.8960}, {'INR': 85.67}], 
            selectedVal: 'GBP'
        });

        expect(ConverterReducer(undefined, ratesPayload)).toEqual({
            rates: [{'GBP': 0.8960}, {'INR': 85.67}], 
            selectedVal: 'GBP'
        });

        expect(ConverterReducer(null, ratesPayload)).toEqual({
            rates: [{'GBP': 0.8960}, {'INR': 85.67}],  
        });

    });

    it('should update selected currency', () => {

        expect(ConverterReducer(initialState, selectedValPayload)).toEqual({
            rates: [], 
            selectedVal: 'INR'
        });

        expect(ConverterReducer(undefined, selectedValPayload)).toEqual({
            rates: [], 
            selectedVal: 'INR'
        });

        expect(ConverterReducer(null, selectedValPayload)).toEqual({
            selectedVal: 'INR'
        });

    });
})