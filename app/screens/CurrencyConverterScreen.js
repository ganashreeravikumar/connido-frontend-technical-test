import React, {Component} from 'react';

import { connect } from 'react-redux';

import fetchData from '../apis/FixerApi';
import Currencies from '../config/Currencies';
import CurrencyConverter from '../component/CurrencyConverter';
import { updateRates } from '../actions/ConverterAction';

export class CurrencyConverterScreen extends Component {

    componentWillMount() {
      // Use when API working: this.loadData();
      this.loadMockData();
    }

    componentDidMount() {
        // Use when API working: setInterval(this.loadData, 30000);
        setInterval(this.loadMockData, 30000);
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
    //        const { rates } = response;
    //        this.setState({ rates: rates });
    //        this.props.updateRates(rates);
    //      } else {
    //        const {type, code} = response.error;
    //        throw Error(`code: ${code} - ${type}`)
    //      }
    //    } catch(error) {
    //      Alert.alert('Error', error.message)   
    //      console.log('Error:', error);
    //    }
    //  }

    render() {
        return (
          <CurrencyConverter 
            refreshRates={this.loadMockData} // Use when API working: refreshRates={this.loadData}
          />
        );
      }
}

export default connect( null, {
  updateRates,
})(CurrencyConverterScreen);