import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo'; 
import {Provider} from 'react-redux'
import { Root } from 'native-base';

import store from './app/reducers/Store';
import CurrencyConverterScreen from './app/screens/CurrencyConverterScreen';

export default class App extends React.Component {

  state = { loading: true };

  render() {
    return(
        <Provider store={store}>
          <Root>
            <View style={styles.container}>
              <CurrencyConverterScreen />
            </View>
          </Root>
        </Provider>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
