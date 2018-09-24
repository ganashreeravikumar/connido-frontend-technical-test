import * as React from 'react';
import { View, TextInput, Text } from 'react-native';

import ConvertedResult from './ConvertedResult'
import CurrentRate from './CurrentRate';
import styles from '../screens/Styles';

export default class CurrencyConverter extends React.Component {
    
  state = { value: '0' }
  
  render() {
    const {
        rates, 
        selectedVal, 
        convertedVal, 
        convert, 
        refreshRates,
         updateSelectedCurrency
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
                    convert(val);
                }}
                style={styles.fromCurrencyText}
            />
            <Text style={styles.currencyText}>Euro </Text>
        </View>
        <View style={{flex:4}}>
            <ConvertedResult
                value={this.state.value}
                convert={convert}
                selectedVal={selectedVal}
                convertedVal={convertedVal}
                updateSelectedCurrency={updateSelectedCurrency}
            />
        </View>
      </View>  
    );
    }
}
