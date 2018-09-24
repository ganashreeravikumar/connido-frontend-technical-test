import * as React from 'react';
import { View } from 'react-native';

import { Text, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import styles from '../screens/Styles';

export default class CurrentRate extends React.Component {
  
  render() {
    const {rates, selectedVal, refreshRates} = this.props;
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
    </View>
    )
  }
}