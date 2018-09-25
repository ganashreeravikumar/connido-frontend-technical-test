import React, {Component} from 'react';
import { Text, View, TextInput, TouchableOpacity, Picker, Alert } from 'react-native';

import { connect } from 'react-redux';

import fetchData from '../apis/FixerApi';
import Currencies from '../config/Currencies';
import CurrencyConverter from '../component/CurrencyConverter';
import { updateRates, updateSelectedCurrency } from '../actions/ConverterAction'


export class CurrencyConverterScreen extends Component {

    state = { convertedVal: 0 }

    componentDidMount() {
        // this.loadData();
        this.loadMockData();
    }

    loadMockData = () => {
      let rates = {'GBP': 0.8960, 'INR': 85.67, 'USD': 1.2};
      this.setState({ rates });
      this.props.updateRates(rates);
    }

    // Commented as API limit is reached.

    // loadData = async () => {
    //     try {
    //      const res = await fetchData('EUR', Currencies);
    //      const response = await res.json();

    //      if(response.success) {
    //        this.setState({ rates: response.rates });
    //        this.props.updateRates(response.rates);
    //      } else {
    //        const {type, code} = response.error;
    //        throw Error(`code: ${code} - ${type}`)
    //      }
    //    } catch(error) {
    //      Alert.alert('Error', error.message)   
    //      console.log('Error:', error);
    //    }
    //  }
     
     convert = (value) => {
        const { rates, selectedVal } = this.props;
        console.log(value, rates, Number(value) * rates[selectedVal], selectedVal)
        this.setState({ convertedVal: Number(value) * rates[selectedVal]});
    }


    render() {
        const { convertedVal } = this.state;
        const {rates, selectedVal} = this.props;

        return (
          <CurrencyConverter 
            rates={rates}
            refreshRates={this.loadMockData} // Use when API working: refreshRates={this.loadData}
            selectedVal={selectedVal}
            convertedVal={convertedVal}
            convert={value => this.convert(value)}
            updateSelectedCurrency={(selectedVal) => this.props.updateSelectedCurrency(selectedVal)}
          />
        );
      }

}

const mapStateToProps = state => ({
    rates: state.currencyRates.rates,
    selectedVal: state.currencyRates.selectedVal
});

export default connect( mapStateToProps, {updateRates, updateSelectedCurrency})(CurrencyConverterScreen);