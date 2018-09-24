import * as React from 'react';
import { View, TextInput } from 'react-native';

import { ActionSheet, Text, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import styles from '../screens/Styles';
import Currencies from '../config/Currencies';

export default class CurrencyConverter extends React.Component {

  state = { value: '0' }
  
  render() {
    const {rates, selectedVal, convertedVal, convert, refreshRates} = this.props;
    const Options = [ ...Currencies, 'Cancel']

    return (
    <View style={styles.container}>
        <View style={styles.currencyRateWrapper}>
            <Text style={styles.title}>Currency Rate:</Text>
            <Text style={styles.rates}>1 EUR: {(rates[selectedVal])} {selectedVal}</Text>
            <View>
                <Button
                    transparent
                    onPress={refreshRates}
                >
                    <Text style={styles.refreshText}>Refresh Rates</Text> */}
                    <Ionicons name='ios-refresh' size={20} color={'blue'}/>
                </Button>
            </View>
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
        <View style={[styles.currencyWrapper, {backgroundColor: '#FE5735'}]}>
          <View style={styles.toCurrencyWrapper}>
            <Text style={styles.toCurrencyText}>{convertedVal.toFixed(2)}</Text>
          </View>
          <View>
            <Button
                dark
                iconRight
                transparent
                onPress={() =>
                ActionSheet.show(
                {
                    options: Options,
                    cancelButtonIndex: Options.length - 1,
                    title: "Select the currency"
                },
                buttonIndex => {
                    if(buttonIndex !== Options.length - 1) {
                        this.props.updateSelectedCurrency(Options[buttonIndex]);
                        convert(this.state.value);
                    }
                }
                )}
            >
                <Text style={styles.currencyText}>{selectedVal}</Text>
                <Ionicons name='ios-arrow-down' size={25} color={'#fff'}/>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}