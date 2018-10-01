import * as React from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';

import { Ionicons } from '@expo/vector-icons';
import { Text, Button, ActionSheet } from 'native-base';

import styles from '../screens/Styles';
import Currencies from '../config/Currencies';

export default class ConvertedResult extends React.Component {
  
  static propTypes = {
    selectedVal: PropTypes.string.isRequired,
    updateSelectedCurrency: PropTypes.func.isRequired,
    convertedVal: PropTypes.number.isRequired
  };

  render() {
    const { selectedVal, updateSelectedCurrency, convertedVal } = this.props;
    const Options = [ ...Currencies, 'Cancel']

    return (
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
                        updateSelectedCurrency(Options[buttonIndex]);
                    }
                }
                )}
            >
                <Text style={styles.currencyText}>{selectedVal}</Text>
                <Ionicons name='ios-arrow-down' size={25} color={'#fff'}/>
            </Button>
          </View>
        </View>
    );
  }
}