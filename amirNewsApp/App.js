/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import mainReducer, { initialState, appMiddleware } from './src/reducers/main';
import Routes from './src/components/routing'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  I18nManager,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { composeWithDevTools } from 'redux-devtools-extension';



I18nManager.allowRTL(false);
const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
const App = () => {

  const enhancer = composeEnhancers(appMiddleware)
  const store = createStore(
    mainReducer,
    initialState,
    enhancer
  );

  return (
    <Provider store={store}>
           <View style={styles.header}>
       <Text style={styles.title}> News app</Text>
      
      </View>
          <Routes/>
    </Provider>
  );

}


const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
});

export default App
