import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    currencyRateWrapper: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ACEFDE'
    },
    currencyWrapper: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        backgroundColor: '#FE4A87'
    },
    fromCurrencyText: {
        width: 150,
        height: 30, 
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        borderBottomWidth: 1,
        borderColor: '#fff',
    },
    currencyText: {
        fontSize: 25,
        color: '#fff',
    },
    toCurrencyText: {
        fontSize: 25,
        width: 150,
        color: '#fff',
        textAlign: 'center'
    },
    toCurrencyWrapper: {
        borderBottomWidth: 1,
        borderColor: '#fff',
    },
    title: {
        marginBottom: 10,
        fontSize: 25,
    },
    rates: {
        fontSize: 25
    },
    refreshText: {
        fontSize: 15
    },
});

export default styles;
  