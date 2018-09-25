import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Constants, Font, AppLoading} from 'expo'; 
import {Provider} from 'react-redux'
import { Root } from 'native-base';


import store from './app/reducers/Store';

// import CurrencyConverter from './app/component/CurrencyConverter';
import CurrencyConverterScreen from './app/screens/CurrencyConverterScreen';

export default class App extends React.Component {

  state = { loading: true };

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <Text>Loading....</Text>
        </View>
      )
    } else {
      return (
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
