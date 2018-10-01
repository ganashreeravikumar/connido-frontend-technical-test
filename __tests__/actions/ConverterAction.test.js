import { ActionTypes,
    updateRates, 
    updateSelectedCurrency, 
    updateInputNumber
} from '../../app/actions/ConverterAction';

describe('Converter Actions', () => {

    it('should create an action to set rates', () => {
        expect(updateRates({'GBP': 0.8960, 'INR': 85.67}))
            .toEqual({
                payload: { rates: {'GBP': 0.8960, 'INR': 85.67} },
                type: ActionTypes.UPDATE_RATES,
            });
    });

    it('should create an action to update input number', () => {
        expect(updateInputNumber(12))
            .toEqual({
                payload: { num: 12 },
                type: ActionTypes.UPDATE_INPUT_NUM,
            });
    });

    it('should create an action to update selected currency', () => {
        expect(updateSelectedCurrency('INR'))
            .toEqual({
                payload: { selectedVal: 'INR' },
                type: ActionTypes.UPDATE_SELECTED_CURRENCY,
            });
    });
});