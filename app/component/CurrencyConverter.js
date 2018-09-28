import * as React from 'react';
import { View, TextInput, Text } from 'react-native';

import { connect } from 'react-redux';

import styles from '../screens/Styles';
import CurrentRate from './CurrentRate';
import ConvertedResult from './ConvertedResult';
import { updateInputNumber, updateSelectedCurrency } from '../actions/ConverterAction';


class CurrencyConverter extends React.Component {
    
  state = { value: '0' };
  
  render() {
    const {
        rates, 
        selectedVal, 
        convertedVal, 
        refreshRates,
        updateInputNumber,
        updateSelectedCurrency,
    } = this.props;

    return (
        <View style={styles.container}>
            <View style={{flex:2}}>
                <CurrentRate
                    rates={rates}
                    selectedVal={selectedVal}
                    refreshRates={refreshRates}
                />
            </View>
            <View style={styles.currencyWrapper}>
                <TextInput
                    maxLength={10}
                    keyboardType={'numeric'}
                    value={this.state.value}
                    onChangeText={(val) => {
                        this.setState({ value: val });
                        updateInputNumber(val);
                    }}
                    style={styles.fromCurrencyText}
                />
                <Text style={styles.currencyText}>Euro </Text>
            </View>
            <View style={{flex:4}}>
                <ConvertedResult
                    selectedVal={selectedVal}
                    convertedVal={convertedVal}
                    updateSelectedCurrency={updateSelectedCurrency}
                />
            </View>
        </View>  
    );
    }
}

const mapStateToProps = state => ({
    rates: state.currencyRates.rates,
    selectedVal: state.currencyRates.selectedVal,
    inputNum: state.currencyRates.inputNum,
    convertedVal: state.currencyRates.convertedVal
});

export default connect( mapStateToProps, {
    updateSelectedCurrency,
    updateInputNumber,
  })(CurrencyConverter);